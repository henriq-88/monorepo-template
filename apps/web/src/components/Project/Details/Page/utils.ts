import { useRouter } from "next/router";
import z from "zod";

export const useProjectSlug = () => {
  const router = useRouter();
  const projectSlugQueryParam = Array.isArray(router.query.projectSlug)
    ? router.query.projectSlug[0]
    : router.query.projectSlug;
  const projectSlug = z
    .string()
    .nullish()
    .catch(null)
    .parse(projectSlugQueryParam);
  return projectSlug;
};

export const projectSlugToTitleSearch = (slug: string) => {
  return slug.replaceAll(`-`, ` `);
};
