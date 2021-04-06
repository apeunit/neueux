import React, { ReactNode } from "react";
import Head from "next/head";
import Navbar from "components/Navbar";
import Config from 'config.json';

type Props = {
  children?: ReactNode;
  title?: string;
  description?: string;
};

const Layout = ({ children, title = null, description = Config.site_description }: Props) => (
  <div className="pb-10 overflow-hidden">
    <Head>
      <title>{title ? `${title} | `: null}{Config.site_title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="description" content={description} />
    </Head>
    <header>
      <Navbar />
    </header>
    {children}
  </div>
);

export default Layout;
