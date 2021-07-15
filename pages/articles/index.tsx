import { GetStaticProps } from "next";
import Layout from "components/Layout";
import React from "react";
// import Header from "components/Header";
import Image from "next/image";
import { listArticleContent } from "lib/articles";
import Link from "next/link";

const FeatArticle = ({ article, key }) => {
  return (
    <div key={key} className="w-full flex flex-row justify-between py-12">
      <div className="max-w-md w-full justify-around flex-col flex align-middle px-auto">
        <div>
          <p className="text-sm text-gray-500">{article.category}</p>
          <Link href={`/articles/${article.slug}`}>
            <h1 className="font-bold text-lg cursor-pointer">{article.title}</h1>
          </Link>
          <p className="text-sm text-gray-500">{article.summary}</p>
          <p className="text-sm text-gray-500">by {article.authors.join(", ")}</p>
        </div>
      </div>

      <div className="w-1/2 cursor-pointer">
        <Link href={`/articles/${article.slug}`}>
          <Image
            className="w-1/2 cursor-pointer border-0"
            src={article.featured_image}
            width="770px"
            height="770px"
          />
        </Link>
      </div>
    </div>

  )
}

const ItemArticle = ({ article, key }) => {
  return (
    <div className="w-full" key={key}>
      <Link href={`/articles/${article.slug}`}>
        <Image
          className="cursor-pointer"
          src={article.featured_image}
          width="360px"
          height="240px"
        />
      </Link>
      <Link href={`/articles/${article.slug}`}>
        <h1 className="font-bold text-lg cursor-pointer">{article.title}</h1>
      </Link>
      <p className="text-sm text-gray-500">{article.summary}</p>
    </div>
  )
}
const ArticlesPage = ({ articles }) => {
  return (
    <Layout title="Articles" editable>
      <main className="w-11/12 max-w-content mx-auto justify-between relative">
        {/* <Header title="Articles" /> */}
        <FeatArticle key={articles[0].key} article={articles[0]} />
        <div className="flex justify-between space-x-10">
          {articles.map((article, key) => {
            if (key !== 0) return <ItemArticle key={key} article={article} />
          })}
        </div>
      </main>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async ({
  preview,
  // previewData,
}) => {
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
