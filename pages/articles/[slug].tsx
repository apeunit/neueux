import { GetStaticProps, GetStaticPaths } from "next";
import Layout from "components/Layout";
import React, { useEffect } from "react";
import { getArticleContent, listAllArticleContent } from "lib/articles";
import ReactMarkdown from "react-markdown";
import { useRouter } from "next/router";

const App = ({ article, preview, slug }) => {
  console.log(preview);
  const router = useRouter();

  useEffect(() => {
    if (preview) {
      router.push({
        pathname: `/editor/articles/${slug}`,
      });
    }
  });

  if (!article) return null;
  return (
    <Layout
      title={`${article.title} - Article`}
      description={article.summary}
      backButton
      editable
      image={{
        src: article.featured_image,
      }}
    >
      <main className="w-11/12 mx-auto mt-5 prose max-w-full">
        <h1>{article.title}</h1>
        <p>{article.title}</p>
        {article.featured_image && (
          <div className="w-1/4">
            <img src={article.featured_image} />
          </div>
        )}
        <ReactMarkdown>{article.content}</ReactMarkdown>
      </main>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async ({ params, preview }) => {
  const slug = params.slug;

  const article = getArticleContent(slug);

  return {
    props: {
      article,
      slug,
      preview,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const articles = listAllArticleContent();
  const paths = articles
    .filter((article) => article.slug)
    .map((article) => ({
      params: {
        slug: article.slug,
      },
    }));
  return {
    paths,
    fallback: false,
  };
};

export default App;
