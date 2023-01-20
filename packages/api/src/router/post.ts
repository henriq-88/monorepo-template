import { createTRPCRouter, publicProcedure } from "../trpc";
import { z } from "zod";

const BASE_PATH = "/posts";

export const postRouter = createTRPCRouter({
  all: publicProcedure
    .meta({
      openapi: { method: "GET", path: `${BASE_PATH}/all`, tags: ["Posts"] },
    })
    .input(z.void())
    .output(
      z.array(
        z.object({ id: z.string(), title: z.string(), content: z.string() }),
      ),
    )
    .query(({ ctx }) => {
      return ctx.prisma.post.findMany();
    }),
  byId: publicProcedure
    .meta({
      openapi: { method: "GET", path: `${BASE_PATH}/{id}`, tags: ["Posts"] },
    })
    .input(
      z.object({
        id: z.string(),
      }),
    )
    .output(
      z
        .object({ id: z.string(), title: z.string(), content: z.string() })
        .nullable(),
    )
    .query(({ ctx, input }) => {
      return ctx.prisma.post.findFirst({ where: { id: input.id } });
    }),
  byTitleSlug: publicProcedure
    .meta({
      openapi: {
        method: "GET",
        path: `${BASE_PATH}/byTitleSlug/{titleSlug}`,
        tags: ["Posts"],
      },
    })
    .input(
      z.object({
        titleSlug: z.string(),
      }),
    )
    .output(
      z
        .object({ id: z.string(), title: z.string(), content: z.string() })
        .nullable(),
    )
    .query(({ ctx, input }) => {
      return ctx.prisma.post.findFirst({
        where: { title: { contains: decodeURIComponent(input.titleSlug) } },
      });
    }),
  create: publicProcedure
    .meta({
      openapi: { method: "POST", path: `${BASE_PATH}`, tags: ["Posts"] },
    })
    .input(z.object({ title: z.string(), content: z.string() }))
    .output(
      z.object({ id: z.string(), title: z.string(), content: z.string() }),
    )
    .mutation(({ ctx, input }) => {
      return ctx.prisma.post.create({ data: input });
    }),
});
