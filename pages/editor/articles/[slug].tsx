import Layout from "components/Layout";
import React from "react";
import ReactMarkdown from "react-markdown";

import { usePlugin } from "tinacms";
import { useGithubMarkdownForm } from "react-tinacms-github";
import { InlineForm } from "react-tinacms-inline";
import { InlineWysiwyg } from "react-tinacms-editor";

import { listAllAppContent } from "lib/app";

import ArticleFormExtended, { FormProps } from "forms/articleExtended";

export default function Home({ file }) {
  const formOptions = ArticleFormExtended();

  // Registers a JSON Tina Form
  const [article, form] = useGithubMarkdownForm(file || {}, formOptions);
  usePlugin(form);
  return (
    <Layout title={`Edit - ${article.name} - App`} backButton editable>
      <main className="w-11/12 mx-auto">
        <InlineForm key={`form-${article.id}`} form={form}>
          <InlineWysiwyg key={`Wysiwyg-${article.id}`} name="markdownBody" format="markdown">
            <ReactMarkdown key={`markdown-${article.id}`}>{article.markdownBody}</ReactMarkdown>
          </InlineWysiwyg>
        </InlineForm>
      </main>
    </Layout>
  );
}

export const getStaticProps = async function ({
  params,
  previewData,
  preview,
}) {
  const { slug } = params;

  if (preview) {
    return {
      props: {
        ...(await FormProps({ previewData, slug })),
        slug,
      },
    };
  }
  return {
    props: {
      sourceProvider: null,
      error: null,
      preview: false,
      editable: true,
      file: {
        fileRelativePath: `content/articles/${slug}.md`,
        data: (await import(`content/articles/${slug}.md`)).default,
      },
      attributes: {},
      slug,
    },
  };
};

export const getStaticPaths = async () => {
  const apps = listAllAppContent();
  const paths = apps
    .filter((app) => app.slug)
    .map((app) => ({
      params: {
        slug: app.slug,
      },
    }));
  return {
    paths,
    fallback: true,
  };
};
