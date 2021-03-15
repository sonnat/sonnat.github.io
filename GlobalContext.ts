import * as React from "react";

interface GlobalContextValue {
  pageName: string;
  isDarkMode: boolean;
  setDarkMode: null | ((isDarkMode: boolean) => void);
}

const GlobalContext = React.createContext<GlobalContextValue>({
  pageName: "UnnamedPage",
  isDarkMode: false,
  setDarkMode: null
});

if (process.env.NODE_ENV !== "production") {
  GlobalContext.displayName = "GlobalContext";
}

export default GlobalContext;
