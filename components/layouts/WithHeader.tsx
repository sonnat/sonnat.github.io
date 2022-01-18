import Header from "components/containers/Header";
import * as React from "react";

const componentName = "WithHeader";

const WithHeader: React.FC = ({ children }) => (
  <>
    <Header />
    {children}
  </>
);

WithHeader.displayName = componentName;

export default WithHeader;
