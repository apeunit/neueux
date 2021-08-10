import { GetStaticProps, GetStaticPaths } from "next";
import Layout from "components/Layout";
import React, { useEffect } from "react";
import { getArticleContent, listAllArticleContent } from "lib/articles";
import ReactMarkdown from "react-markdown";
import { useRouter } from "next/router";
import Link from "next/link";
import style from './markdown-styles.module.css';

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
      <main className="w-full mt-5 prose max-w-full">
        <div className="space-y-3 w-11/12 mx-auto prose-xl lg:prose-2xl">
          <p className="prose-sm leading-loose font-bold text-accent">{article.category}</p>
          <Link href={`/articles/${article.slug}`}>
            <h1>{article.title}</h1>
          </Link>
          <p className="text-gray-700 max-w-xl">{article.summary}</p>
        </div>
        {article.featured_image && (
          <div className="w-screen">
            <img className="h-56 sm:h-80 lg:h-102 lg:w-11/12 mx-auto object-cover w-full" src={article.featured_image} />
          </div>
        )}
        <div className="w-11/12 mx-auto max-w-2xl divide-2 divide-y divide-gray-300">
          <div className="flex flex-row align-middle text-ssm justify-between -my-4">
            <div className="flex flex-row space-x-2">
              <img className="m-0 w-10 h-10" src="/img/max.png" />
              <p className="font-light pt-5">by <span className="font-extrabold">{article.author}</span></p>
            </div>
            <p className="font-light text-gray-500 pt-5">{article.date}</p>
          </div>

        <ReactMarkdown
          className="prose-xl lg:prose-2xl"
        >{article.content}</ReactMarkdown>
        </div>
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
      preview: preview || false,
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
