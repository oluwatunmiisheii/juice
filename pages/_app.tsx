import type { ReactElement, ReactNode } from "react";
import { useEffect } from "react";
import type { NextPage } from "next";
import type { AppProps } from "next/app";
import "../styles/globals.scss";
import { Layout } from "@/components/Layout/Layout";
import AOS from "aos";
import "aos/dist/aos.css";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  useEffect(() => {
    AOS.init({
      easing: "ease",
      duration: 500,
      // once: true
    });
    window.addEventListener(
      "touchmove",
      () => {
        AOS.refresh();
      },
      false,
    );
  }, []);

  const getLayout = Component.getLayout ?? ((page) => <Layout>{page}</Layout>);

  return getLayout(<Component {...pageProps} />);
}
