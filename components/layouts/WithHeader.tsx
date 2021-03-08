import Header from "components/containers/Header";
import * as React from "react";

const componentName = "WithHeader";

interface Props {
  children: React.ReactNode;
}

const WithHeader = ({ children }: Props) => {
  return (
    <React.Fragment>
      <Header />
      {children}
    </React.Fragment>
  );
};

WithHeader.displayName = componentName;

export default WithHeader;
