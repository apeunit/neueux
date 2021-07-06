import React from "react";
import App from "next/app";
import { TinaCMS, TinaProvider } from "tinacms";
import { GithubClient, TinacmsGithubProvider } from "react-tinacms-github";
import AppForm from "forms/app";
import ArticleForm from "forms/article";
import { useGithubToolbarPlugins } from "react-tinacms-github";
import { MarkdownFieldPlugin, HtmlFieldPlugin } from 'react-tinacms-editor'
// import "styles/global.css";
import { CloudinaryMediaStore } from "plugins/mediaStore";

class CMSProvider extends App {
  cms: TinaCMS;

  constructor(props) {
    super(props);

    const github = new GithubClient({
      proxy: "/api/proxy-github",
      authCallbackRoute: "/api/create-github-access-token",
      clientId: process.env.GITHUB_CLIENT_ID,
      baseRepoFullName: process.env.REPO_FULL_NAME, // e.g: tinacms/tinacms.org,
      baseBranch: process.env.BASE_BRANCH, // e.g. 'master' or 'main' on newer repos
    });

    /**
     * 1. Create the TinaCMS instance
     */
    this.cms = new TinaCMS({
      enabled: !!props.pageProps.preview,
      apis: {
        /**
         * 2. Register the GithubClient
         */
        github,
      },
      /**
       * 3. Register the Media Store
       */
      media: new CloudinaryMediaStore(),
      /**
       * 4. Use the Sidebar and Toolbar
       */
      sidebar: {
        placeholder: SidebarPlaceHolder,
      },
      toolbar: props.pageProps.preview,
    });

    this.cms.plugins.add(
      AppForm((slug) => (window.location.href = `/editor/apps/${slug}`))
    );

    this.cms.plugins.add(
      ArticleForm((slug) => (window.location.href = `/editor/articles/${slug}`))
    );
    this.cms.plugins.add(MarkdownFieldPlugin)
    this.cms.plugins.add(HtmlFieldPlugin)
  }

  render() {
    const { children, pageProps } = this.props;
    return (
      /**
       * 5. Wrap the page Component with the Tina and Github providers
       */
      <TinaProvider cms={this.cms}>
        <TinacmsGithubProvider
          onLogin={onLogin}
          onLogout={onLogout}
          error={pageProps.error}
        >
          {/**
           * 6. Add a button for entering Preview/Edit Mode
           */}
          <ToolbarWrapper>{children}</ToolbarWrapper>
        </TinacmsGithubProvider>
      </TinaProvider>
    );
  }
}

const onLogin = async () => {
  const token = localStorage.getItem("tinacms-github-token") || null;
  const headers = new Headers();

  if (token) {
    headers.append("Authorization", "Bearer " + token);
  }

  const resp = await fetch(`/api/preview`, { headers: headers });
  const data = await resp.json();

  if (resp.status == 200) window.location.href = window.location.pathname;
  else throw new Error(data.message);
};

export default CMSProvider;

const onLogout = () => {
  return fetch(`/api/reset-preview`).then(() => {
    window.location.reload();
  });
};

export const SidebarPlaceHolder = () => {
  return (
    <div className="h-full bg-gray-100">
      <div className="bg-white px-5 pb-3">
        <h2>Edit</h2>
      </div>
      {/* <ul className="mx-5 mt-5 border border-solid border-gray-200 rounded divide-y divide-solid divide-gray-200">
        <li className="bg-white hover:bg-gray-50">
          <Link href="/editor/attributes">
            <a>
              <div className="py-3 px-4">Attributes</div>
            </a>
          </Link>
        </li>
      </ul> */}
    </div>
  );
};

const ToolbarWrapper = ({ children }) => {
  useGithubToolbarPlugins();

  return <>{children}</>;
};
