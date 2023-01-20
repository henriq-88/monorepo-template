import { queue } from "async";
import { NextRouter, useRouter } from "next/router";
import { ParsedUrlQueryInput } from "querystring";
import { useCallback } from "react";

const queryParamsQueue = queue(
  async ({
    router,
    params,
  }: {
    router: NextRouter;
    params: ParsedUrlQueryInput;
  }) => {
    return router.replace({
      query: {
        ...router.query,
        ...params,
      },
    });
  },
  1,
);

export const useQueryParams = () => {
  const router = useRouter();

  const addQueryParamsLast = useCallback(
    (params: ParsedUrlQueryInput) => {
      queryParamsQueue.push({ router, params });
    },
    [router],
  );

  const addQueryParams = useCallback(
    (params: ParsedUrlQueryInput) => {
      return addQueryParamsLast(params);
    },
    [router],
  );

  const addQueryParamsFirst = useCallback(
    (params: ParsedUrlQueryInput) => {
      queryParamsQueue.unshift({ router, params });
    },
    [router],
  );

  return { addQueryParams, addQueryParamsFirst, addQueryParamsLast };
};
