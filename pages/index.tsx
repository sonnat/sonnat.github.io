import { NextPage } from "next";

const pageName = "LandingPage";

interface Props {}

const LandingPage: NextPage<Props> = () => {
  return <h1>Landing</h1>;
};

LandingPage.displayName = pageName;

export default LandingPage;
