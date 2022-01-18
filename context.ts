import { createContext } from "react";

export interface IMediaQueryContext {
  isDesktop: boolean;
  isTablet: boolean;
  isMobile: boolean;
}

export const MediaQueryContext = createContext<IMediaQueryContext>({
  isDesktop: false,
  isTablet: false,
  isMobile: false
});
