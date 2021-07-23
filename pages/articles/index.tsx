import { GetStaticProps } from "next";
import Layout from "components/Layout";
import React from "react";
// import Header from "components/Header";
import Image from "next/image";
import { listArticleContent } from "lib/articles";
import Link from "next/link";

const FeatArticle = ({ article, key }) => {
  return (
    <div key={key} className="w-full flex flex-row justify-between py-5">
      <div className="max-w-md w-full justify-around flex-col flex align-middle px-auto">
        <div className="space-y-3 mr-5">
          <p className="text-xs leading-loose font-bold text-accent">{article.category}</p>
          <Link href={`/articles/${article.slug}`}>
            <h1 className="font-extrabold text-3xl leading-2 cursor-pointer">{article.title}</h1>
          </Link>
          <p className="text-lg text-gray-700">{article.summary}</p>
          <p className="text-xs pt-2">by <b>{article.author}</b></p>
        </div>
      </div>

      <div className="cursor-pointer">
        <Link href={`/articles/${article.slug}`}>
          <Image
            className="object-fill cursor-pointer border-0 max-h-96"
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
    <div className="w-full pl-6" key={key}>
      <Link href={`/articles/${article.slug}`}>
        <img
          className="cursor-pointer object-cover w-full h-72"
          src={article.featured_image}
          // width="30vw"
          height="240px"
        />
      </Link>
      <div className="max-w-md w-full justify-around flex-col flex align-middle px-auto">
        <div className="space-y-3 mt-5 mr-5">
          <p className="text-xs leading-loose font-bold text-accent">{article.category}</p>
          <Link href={`/articles/${article.slug}`}>
            <h1 className="font-extrabold text-2.5xl leading-2 cursor-pointer">{article.title}</h1>
          </Link>
          <p className="text-lg text-gray-700">{article.summary}</p>
          <p className="text-xs pt-2">by <b>{article.author}</b></p>
        </div>
      </div>
      {/* <p className="text-xs leading-loose font-bold text-accent">{article.category}</p>
      <Link href={`/articles/${article.slug}`}>
        <h1 className="font-bold text-lg cursor-pointer">{article.title}</h1>
      </Link>
      <p className="text-sm text-gray-500">{article.summary}</p> */}
    </div>
  )
}
const ArticlesPage = ({ articles }) => {
  return (
    <Layout title="Articles" editable>
      <main className="w-11/12 max-w-content mx-auto justify-between relative divide-y-gray-200 divide-y-2">
        {/* <Header title="Articles" /> */}
        <FeatArticle key={articles[0].key} article={articles[0]} />
        <div className="pt-7 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-items-stretch gap-6 md:divide-x-gray-200 md:divide-x-2">
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
