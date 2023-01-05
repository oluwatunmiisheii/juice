import Head from "next/head";

interface SeoProps {
  pageTitle: string;
}

export const Seo = ({ pageTitle }: SeoProps) => {
  return (
    <Head>
      <title>{pageTitle}</title>
      <meta property="og:type" content="website" />
      <meta property="og:url" content="juice.com" />
      <meta property="og:title" content="Juice - simple and secure payments" />
      <meta property="og:description" content="Fast, simple and secure payments" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="Juice" />
    </Head>
  );
};
