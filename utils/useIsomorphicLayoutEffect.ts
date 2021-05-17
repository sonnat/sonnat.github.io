import * as React from "react";

export default typeof window === "undefined"
  ? React.useEffect
  : React.useLayoutEffect;
