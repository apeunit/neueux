import React, { ReactNode } from 'react'
import Head from 'next/head'

type Props = {
  children?: ReactNode
  title?: string
}

const Layout = ({ children, title = 'This is the default title' }: Props) => (
  <div className="m-5">
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <header>
      {/* <nav>
        header
      </nav> */}
    </header>
    {children}
    {/* <footer>
      <hr />
      <span>I'm here to stay (Footer)</span>
    </footer> */}
  </div>
)

export default Layout
