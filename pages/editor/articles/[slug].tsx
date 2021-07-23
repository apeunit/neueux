import Layout from "components/Layout";
import React from "react";
import ReactMarkdown from "react-markdown";

import { usePlugin } from "tinacms";
import { useGithubMarkdownForm } from "react-tinacms-github";
import { InlineForm, InlineText, InlineImage } from "react-tinacms-inline";
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
          <div className="text-3xl font-medium">
            <InlineText
              className="mb-10"
              name="frontmatter.title"
              placeholder="Title"
            >
              {article?.frontmatter?.title}
            </InlineText>
          </div>

          <div className="w-1/4">
            <InlineImage
              name="frontmatter.featured_image"
              parse={(media) => media.previewSrc}
              uploadDir={() => "neueux/media/articles"}
              alt={article?.frontmatter?.title}
            />
          </div>
          <div className="text-base italic font-light">
            <InlineText
              className="mb-10 italic"
              name="frontmatter.summary"
              placeholder="Summary"
            >
              {article?.frontmatter?.summary}
            </InlineText>
          </div>

          <div className="text-base italic font-light leading-tight flex mb-16">
            <span className="height-auto  font-medium">Author:</span>
            <div className="block flex-grow pl-5">
              <InlineText
                className="italic inline-block"
                name="frontmatter.author"
                placeholder="Author"
              >
                {article?.frontmatter?.author}
              </InlineText>
            </div>
          </div>

          <InlineWysiwyg
            key={`Wysiwyg-${article?.frontmatter?.id}`}
            name="markdownBody"
            format="markdown"
            imageProps={{
              parse: (media) => media.previewSrc,
              uploadDir: () => "neueux/media/articles",
            }}
            sticky="5rem"
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
