import type { NextApiHandler, NextApiRequest, NextApiResponse } from "next";
import Cors from "cors";

const cors = Cors({
  origin: [
    /https?:\/\/localhost:\d{4,5}/,
    /https:\/\/monorepo-template(-\w+)\.vercel\.app/, // e.g. https://monorepo-template-web.vercel.app
    /https:\/\/monorepo-template(-\w+)-henriq-88\.vercel\.app/, // e.g. https://monorepo-template-orebq1szf-henriq-88.vercel.app or https://monorepo-template-web-henriq-88.vercel.app
    /https:\/\/monorepo-template(-\w+){2}-henriq-88\.vercel\.app/, // e.g. https://monorepo-template-admin-mkikf3i03-henriq-88.vercel.app
    /https:\/\/monorepo-template(-\w+)-git-main-henriq-88\.vercel\.app/, // e.g. https://monorepo-template-web-git-main-henriq-88.vercel.app
  ],
});

function runMiddleware(
  req: NextApiRequest,
  res: NextApiResponse,
  fn: (...args: any[]) => void,
) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result: unknown) => {
      if (result instanceof Error) {
        return reject(result);
      }

      return resolve(result);
    });
  });
}

export function withCors(handler: NextApiHandler) {
  return async (req: NextApiRequest, res: NextApiResponse) => {
    await runMiddleware(req, res, cors);

    return await handler(req, res);
  };
}
