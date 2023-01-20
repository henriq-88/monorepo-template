import pkg from "../../../package.json";
import { NextApiRequest, NextApiResponse } from "next";
import { generateOpenApiDocument } from "trpc-openapi";
import { appRouter } from "@wassdahl/api";
import { env } from "../../env/client.mjs";

const openApiDocument = generateOpenApiDocument(appRouter, {
  title: "tRPC OpenAPI",
  version: pkg.version,
  baseUrl: `${env.NEXT_PUBLIC_API_URL}/api`,
});

// Respond with our OpenAPI schema
const handler = (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).send(openApiDocument);
};

export default handler;
