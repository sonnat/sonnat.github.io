import { initialize, set, pageview, event, exception } from "react-ga";

export const initGA = (): void => {
  initialize("UA-181316522-1");
};

export const logPageView = (): void => {
  set({ page: window.location.pathname });
  pageview(window.location.pathname);
};

export const logEvent = (category = "", action = ""): void => {
  if (category && action) event({ category, action });
};

export const logException = (description = "", fatal = false): void => {
  if (description) exception({ description, fatal });
};
