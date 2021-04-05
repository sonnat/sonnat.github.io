import Header from "components/containers/Header";
import * as React from "react";

const componentName = "WithHeader";

const WithHeader: React.FC = ({ children }) => {
  return (
    <React.Fragment>
      <Header />
      {children}
    </React.Fragment>
  );
};

WithHeader.displayName = componentName;

export default WithHeader;
