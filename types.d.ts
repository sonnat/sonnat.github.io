import { AppProps } from "next/app";
import { NextComponentType, NextPageContext } from "next";
import * as React from "react";

export type GetLayout = () => (page: React.ReactNode) => React.ReactNode;

export type NextComponentTypeWithLayout<P = {}> = NextComponentType<
  NextPageContext,
  any,
  P
> & {
  getLayout?: GetLayout;
};

export type NextPageWithLayout<P = {}, IP = P> = NextComponentType<
  NextPageContext,
  IP,
  P
> & {
  getLayout?: GetLayout;
};

export type AppPropsWithLayout<P = {}> = AppProps<P> & {
  Component: NextComponentTypeWithLayout<P>;
};

export interface MDXMeta {
  title: string;
  description: string;
  getLayout?: GetLayout;
}
