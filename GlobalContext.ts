import * as React from "react";

interface GlobalContextValue {
  pageName: string;
  isDarkMode: boolean;
  setDarkMode: (isDarkMode: boolean) => void;
}

const GlobalContext: React.Context<GlobalContextValue> = React.createContext({
  pageName: "UnnamedPage",
  isDarkMode: false,
  setDarkMode: () => {}
});

if (process.env.NODE_ENV !== "production") {
  GlobalContext.displayName = "GlobalContext";
}

export default GlobalContext;
