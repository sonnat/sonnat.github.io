import { NextPage } from "next";
import Head from "next/head";
import * as React from "react";
import {
  setTitleMeta,
  setDescriptionMeta,
  setCanonicalMeta,
  setKeywordsMeta
} from "utils";
import { defaultKeywordsMetaContent } from "sharedVars";

const pageName = "LandingPage";

interface Props {}

const LandingPage: NextPage<Props> = () => {
  return (
    <React.Fragment>
      <Head>
        {setTitleMeta("Sonnat Dev: React Components & Developer Resources")}
        {setDescriptionMeta(
          "React component library using Sonnat Design System to build faster, elegant, and accessible web applications"
        )}
        {setCanonicalMeta("https://sonnat.dev")}
        {setKeywordsMeta(defaultKeywordsMetaContent)}
      </Head>
      <h1>Landing</h1>
    </React.Fragment>
  );
};

LandingPage.displayName = pageName;

export default LandingPage;
