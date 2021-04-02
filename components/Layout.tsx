import React, { ReactNode } from "react";
import Head from "next/head";
import Navbar from "components/Navbar";

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = "This is the default title" }: Props) => (
  <div className="pb-10 overflow-hidden">
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <header>
      <Navbar />
    </header>
    {children}
  </div>
);

export default Layout;
