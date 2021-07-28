import { GetStaticProps } from "next";
import Layout from "components/Layout";
import React from "react";
import Header from "components/Header";
import Image from "next/image";
import { listArticleContent } from "lib/articles";
import Link from "next/link";

const ArticlesPage = ({ articles }) => {
  return (
    <Layout title="Screen Gallery" editable>
      <main className="w-11/12 mx-auto xl:relative">
        <Header title="Articles" />
        {articles.map((article, key) => {
          return (
            <div key={key}>
              <Link href={`/articles/${article.slug}`}>
                <Image
                  className="cursor-pointer"
                  src={article.featured_image}
                  width="380"
                  height="380"
                />
              </Link>
              <Link href={`/articles/${article.slug}`}>
                <h1 className="font-bold text-lg cursor-pointer">
                  {article.title}
                </h1>
              </Link>
              <p className="text-sm text-gray-500">{article.summary}</p>
            </div>
          );
        })}
      </main>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async ({ preview }) => {
  const articles = listArticleContent(1, 30);
  const pagination = {
    current: 1,
    pages: 1,
  };
  return {
    props: {
      articles,
      pagination,
      preview: preview || false,
      // previewData,
    },
  };
};

export default ArticlesPage;
