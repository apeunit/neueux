import React from "react";
import CMSProvider from "./_cms";
import App from "next/app";
import "styles/global.css";
// import { MarkdownFieldPlugin, HtmlFieldPlugin } from "react-tinacms-editor";
// import "styles/global.css";

class Site extends App {
  render() {
    const { pageProps, Component } = this.props;
    return (
      /**
       * 5. Wrap the page Component with the Tina and Github providers
       */
      <CMSProvider preview={pageProps?.preview} error={pageProps?.error}>
        <Component {...pageProps} />
      </CMSProvider>
    );
  }
}

export default Site;
