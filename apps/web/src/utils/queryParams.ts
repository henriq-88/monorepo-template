import { queue } from "async";
import { NextRouter, useRouter } from "next/router";
import { ParsedUrlQueryInput } from "querystring";
import { useCallback } from "react";

const queryParamsQueue = queue(
  // eslint-disable-next-line @typescript-eslint/no-misused-promises
  async ({
    router,
    params,
  }: {
    router: NextRouter;
    params: ParsedUrlQueryInput;
  }) =>
    router.replace({
      query: {
        ...router.query,
        ...params,
      },
    }),
  1,
);

export const useQueryParams = () => {
  const router = useRouter();

  const addQueryParamsLast = useCallback(
    (params: ParsedUrlQueryInput) => {
      void queryParamsQueue.push({ router, params });
    },
    [router],
  );

  const addQueryParams = useCallback(
    (params: ParsedUrlQueryInput) => {
      return addQueryParamsLast(params);
    },
    [addQueryParamsLast],
  );

  const addQueryParamsFirst = useCallback(
    (params: ParsedUrlQueryInput) => {
      void queryParamsQueue.unshift({ router, params });
    },
    [router],
  );

  return { addQueryParams, addQueryParamsFirst, addQueryParamsLast };
};
