import { appRouter, createTRPCContext } from "@wassdahl/api";
import { createNextApiHandler } from "@trpc/server/adapters/next";
import { withCors } from "../../../../middleware";

// export API handler
export default withCors(
  createNextApiHandler({
    router: appRouter,
    createContext: createTRPCContext,
  }),
);
