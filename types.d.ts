import type { AppProps } from "next/app";
import type { NextComponentType, NextPageContext } from "next";
import * as React from "react";

/** To be or not to be... */
export type Maybe<T> = T | void;

export type Optional<T> = T | undefined;
export type Nullable<T> = Optional<T> | null;

export type GetLayout = () => (page: React.ReactNode) => React.ReactNode;

export type NextComponentTypeWithLayout<P = Record<string, never>> =
  NextComponentType<NextPageContext, unknown, P> & {
    getLayout?: GetLayout;
  };

export type NextPageWithLayout<
  P = Record<string, never>,
  IP = P
> = NextComponentType<NextPageContext, IP, P> & {
  getLayout?: GetLayout;
};

export type AppPropsWithLayout<P = Record<string, never>> = AppProps<P> & {
  Component: NextComponentTypeWithLayout<P>;
};

export interface MDXMeta {
  title: string;
  description: string;
  getLayout?: GetLayout;
}
