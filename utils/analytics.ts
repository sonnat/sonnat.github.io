import ReactGA from "react-ga";

export const initGA = (): void => {
  ReactGA.initialize("UA-181316522-1");
};

export const logPageView = (): void => {
  ReactGA.set({ page: window.location.pathname });
  ReactGA.pageview(window.location.pathname);
};

export const logEvent = (category = "", action = ""): void => {
  if (category && action) ReactGA.event({ category, action });
};

export const logException = (description = "", fatal = false): void => {
  if (description) ReactGA.exception({ description, fatal });
};
