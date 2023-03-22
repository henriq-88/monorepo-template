import { protectedProcedure, publicProcedure, createTRPCRouter } from "../trpc";

export const authRouter = createTRPCRouter({
  getSession: publicProcedure
    .meta({ openapi: { method: "GET", path: "/auth/getSession" } })
    .query(({ ctx }) => {
      return ctx.session;
    }),
  getSecretMessage: protectedProcedure
    .meta({ openapi: { method: "GET", path: "/auth/getSecretMessage" } })
    .query(() => {
      // testing type validation of overridden next-auth Session in @wassdahl/auth package
      return "you can see this secret message!";
    }),
});
