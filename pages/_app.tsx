import React from "react";
import CMSProvider from "./_cms";



import "tailwindcss/tailwind.css";
// import { MarkdownFieldPlugin, HtmlFieldPlugin } from "react-tinacms-editor";
// import "styles/global.css";

export const Toolbar = ({ children }) => {
  return <>{children}</>;
};

const Site = ({ pageProps, Component }) => {
  return (
    /**
     * 5. Wrap the page Component with the Tina and Github providers
     */
    <CMSProvider pageProps={pageProps}>
      <Component {...pageProps} />
    </CMSProvider>
  );
};

export default Site;
