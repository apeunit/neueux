import Layout from "components/Layout";
import React from "react";
import ReactMarkdown from "react-markdown";

import { usePlugin } from "tinacms";
import { useGithubMarkdownForm } from "react-tinacms-github";
import { InlineForm, InlineText } from "react-tinacms-inline";
import { InlineWysiwyg } from "react-tinacms-editor";

import ArticleFormExtended, { FormProps } from "forms/articleExtended";

export default function Home({ file }) {
  const formOptions = ArticleFormExtended();

  // Registers a JSON Tina Form
  const [article, form] = useGithubMarkdownForm(file || {}, formOptions);
  usePlugin(form);
  return (
    <Layout
      title={`Edit - ${article?.frontmatter?.name} - App`}
      backButton
      editable
    >
      <main className="w-11/12 mx-auto mt-5 prose max-w-full">
        <InlineForm key={`form-${article?.frontmatter?.id}`} form={form}>
          <h1>
            <InlineText className="mb-10" name="frontmatter.title">
              {article?.frontmatter?.title}
            </InlineText>
          </h1>

          <p>
            <InlineText className="mb-10" name="frontmatter.summary">
              {article?.frontmatter?.title}
            </InlineText>
          </p>

          {article?.frontmatter?.featured_image && (
            <div className="w-1/4">
              <img src={article?.frontmatter?.featured_image} />
            </div>
          )}
          <InlineWysiwyg
            key={`Wysiwyg-${article?.frontmatter?.id}`}
            name="markdownBody"
            format="markdown"
            imageProps={{
              parse: (media) => media.previewSrc,
              uploadDir: () => "neueux/media/articles",
            }}
          >
            <ReactMarkdown key={`markdown-${article?.frontmatter?.id}`}>
              {article.markdownBody}
            </ReactMarkdown>
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
  // const apps = listAllAppContent();
  // const paths = apps
  //   .filter((app) => app.slug)
  //   .map((app) => ({
  //     params: {
  //       slug: app.slug,
  //     },
  //   }));
  const paths = [];
  return {
    paths,
    fallback: true,
  };
};
