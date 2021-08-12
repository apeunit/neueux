import { GetStaticProps } from "next";
import Layout from "components/Layout";
import React from "react";
// import Header from "components/Header";
// import Image from "next/image";
import { listArticleContent } from "lib/articles";
import Link from "next/link";

const FeatArticle = ({ article, key }) => {
  return (
    <div key={key} className="w-full flex flex-col-reverse lg:flex-row justify-between pb-5">
      <div className="lg:max-w-md w-full justify-around flex-col flex align-middle px-auto">
        <div className="space-y-3 mr-5">
          <p className="text-xs mt-4 leading-loose font-bold text-accent">{article.category}</p>
          <Link href={`/articles/${article.slug}`}>
            <h1 className="font-extrabold text-5xl leading-2 cursor-pointer">{article.title}</h1>
          </Link>
          <p className="text-lg text-gray-700">{article.summary}</p>
          <p className="text-xs pt-2">by <b>{article.author}</b></p>
        </div>
      </div>

      <Link href={`/articles/${article.slug}`}>
        <div className="aspect-w-1 aspect-h-1">
          <img className="cursor-pointer object-cover" src={article.featured_image}/>
        </div>
      </Link>
    </div>

  )
}

const ItemArticle = ({ article }) => {
  return (
    <div className="w-full pt-5 lg:pt-0 lg:pl-5 first:pl-0">

      <Link href={`/articles/${article.slug}`}>
        <div className="aspect-w-2 aspect-h-1">
          <img className="cursor-pointer object-cover" src={article.featured_image} />
        </div>
      </Link>

      <div className="max-w-md w-full justify-around flex-col flex align-middle">
        <div className="space-y-3 mt-5">
          <p className="text-xs leading-loose font-bold text-accent">{article.category}</p>
          <Link href={`/articles/${article.slug}`}>
            <h1 className="font-extrabold text-2.5xl leading-2 cursor-pointer">{article.title}</h1>
          </Link>
          <p className="text-md text-gray-700">{article.summary}</p>
          <p className="text-xs pt-2">by <b>{article.author}</b></p>
        </div>
      </div>
    </div>
  )
}

const ArticlesPage = ({ articles }) => {
  return (
    <Layout title="Articles" editable>
      <main className="w-11/12 max-w-8xl mt-16 mx-auto justify-between relative divide-y-gray-200 divide-y">
        <FeatArticle key={articles[0].key} article={articles[0]} />
        <div className="lg:pt-5 grid grid-cols-1 lg:grid-cols-3 justify-items-stretch divide-y lg:divide-y-0 lg:divide-x gap-5">
          {articles.map((article, key) => {
            if (key !== 0) return <ItemArticle key={key} article={article} />
          })}
        </div>
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
