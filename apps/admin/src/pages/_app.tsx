import "../styles/globals.css";
import { SessionProvider } from "next-auth/react";
import type { Session } from "next-auth";
import type { AppType } from "next/app";
import { api } from "../api";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Quicksand } from "@next/font/google";

const themeFontFamily = Quicksand({ subsets: ["latin"], weight: ["300"] });

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <>
      <style jsx global>
        {`
          html {
            font-family: ${themeFontFamily.style.fontFamily};
          }
        `}
      </style>
      <SessionProvider session={session}>
        <Component {...pageProps} />
      </SessionProvider>
      <ReactQueryDevtools />
    </>
  );
};

export default api.withTRPC(MyApp);
