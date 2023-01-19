import "../styles/globals.css";
import { SessionProvider } from "next-auth/react";
import type { Session } from "next-auth";
import type { AppType } from "next/app";
import { api } from "../api";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Quicksand } from "@next/font/google";

const titleThemeFontFamily = Quicksand({ subsets: ["latin"], weight: ["700"] });
const bodyThemeFontFamily = Quicksand({ subsets: ["latin"], weight: ["300"] });

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <>
      <style jsx global>
        {`
          :root {
            --title-theme-font: ${titleThemeFontFamily.style.fontFamily};
            --body-theme-font: ${bodyThemeFontFamily.style.fontFamily};
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
