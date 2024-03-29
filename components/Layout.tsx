import React, { ReactNode } from "react";
import Head from "next/head";
import Navbar from "components/navbar/Navbar";
import Footer from "components/Footer";
import Config from "config.json";
import BackButton from "components/BackButton";

type OgImage = {
  width?: string;
  height?: string;
  src?: string;
};

type Props = {
  children?: ReactNode;
  image?: OgImage;
  title?: string;
  description?: string;
  backButton?: boolean;
  editable?: boolean;
  fill?: boolean;
};

const Layout = ({
  children,
  title = null,
  image = {},
  description = Config.site_description,
  backButton = false,
  editable = false,
  fill = false,
}: Props) => {
  const siteTitle = title
    ? `${title} | ${Config.site_title}`
    : Config.site_title;
  return (
    <div className="overflow-hidden">
      <Head>
        <title>{siteTitle}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicons/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicons/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicons/favicon-16x16.png"
        />
        <meta name="description" content={description} />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
        <meta property="og:title" content={siteTitle} />
        <meta property="og:description" content={description} />
        <meta
          property="og:image"
          content={image.src || "/favicons/android-chrome-512x512.png"}
        />
        {image.width && (
          <meta property="og:image:width" content={image.width} />
        )}
        {image.height && (
          <meta property="og:image:height" content={image.height} />
        )}
        <meta property="og:site_name" content={Config.site_title} />
        <meta property="og:type" content="website" />
      </Head>
      {!fill && (
        <header>
          <Navbar />
        </header>
      )}
      {backButton && <BackButton />}
      {children}
      {!fill && <Footer editable={editable} />}
    </div>
  );
};

export default Layout;
