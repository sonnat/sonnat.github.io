import * as React from "react";

interface CollapsableContextValue {
  isExpanded: boolean;
  // eslint-disable-next-line no-unused-vars
  setExpanded: ((booleanState: boolean) => void) | undefined | null;
}

const CollapsableContext = React.createContext<CollapsableContextValue>({
  isExpanded: false,
  setExpanded: null
});

export default CollapsableContext;
