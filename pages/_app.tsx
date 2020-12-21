import React from "react";
import { AppProps } from "next/app";
import { GlobalStyles } from "twin.macro";

import "styles/global.scss";

const  App = ({ Component, pageProps }: AppProps) => (
    <>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );

export default App;
