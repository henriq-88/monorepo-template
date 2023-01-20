import {
  appRouter,
  createTRPCContext,
  createOpenApiNextHandler,
} from "@wassdahl/api";
import { NextApiRequest, NextApiResponse } from "next";
import cors from "nextjs-cors";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  // Setup CORS
  await cors(req, res, {
    origin: [
      /https?:\/\/localhost:\d{4,5}/,
      /https:\/\/monorepo-template(-\w+)\.vercel\.app/, // e.g. https://monorepo-template-web.vercel.app
      /https:\/\/monorepo-template(-\w+)-henriq-88\.vercel\.app/, // e.g. https://monorepo-template-orebq1szf-henriq-88.vercel.app or https://monorepo-template-web-henriq-88.vercel.app
      /https:\/\/monorepo-template(-\w+){2}-henriq-88\.vercel\.app/, // e.g. https://monorepo-template-admin-mkikf3i03-henriq-88.vercel.app
      /https:\/\/monorepo-template(-\w+)-git-main-henriq-88\.vercel\.app/, // e.g. https://monorepo-template-web-git-main-henriq-88.vercel.app
    ],
  });

  // Handle incoming OpenAPI requests
  return createOpenApiNextHandler({
    router: appRouter,
    createContext: createTRPCContext,
  })(req, res);
};

export default handler;
