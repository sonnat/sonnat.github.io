import type { NextPage } from "next";
import { useRouter } from "next/router";
import Head from "next/head";
import { defaultKeywordsMetaContent, siteFullAddress } from "sharedVars";
import {
  setCanonicalMeta,
  setDescriptionMeta,
  setKeywordsMeta,
  setTitleMeta
} from "utils";

const DocsPage: NextPage = () => {
  const router = useRouter();

  if (typeof window !== "undefined") {
    void router.replace("/docs/installation");
  }

  return (
    <Head>
      {setTitleMeta(
        `Getting Started | Sonnat Developer Tools, React Components & Resources`
      )}
      {setDescriptionMeta(
        "Get started with Sonnat-UI in the official documentation, and learn more about all our features!"
      )}
      {setCanonicalMeta(`${siteFullAddress}/docs/installation`)}
      {setKeywordsMeta([
        ...defaultKeywordsMetaContent,
        "install",
        "installation",
        "getting started",
        "get started",
        "شروع",
        "نصب",
        "دانلود"
      ])}
    </Head>
  );
};

export default DocsPage;
