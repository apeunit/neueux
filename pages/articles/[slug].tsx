import { GetStaticProps, GetStaticPaths } from "next";
import Layout from "components/Layout";
import React, { useEffect } from "react";
import { getArticleContent, listAllArticleContent } from "lib/articles";
import ReactMarkdown from "react-markdown";
import { useRouter } from "next/router";
import BackButton from "components/BackButton";
import rehypeRaw from 'rehype-raw';
import rehypeSanitize from 'rehype-sanitize';
//import { defaultSchema } from "utils/schema";


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
      editable
      image={{
        src: article.featured_image,
      }}
    >
      <BackButton url="/articles" />
      <main className="mt-5">
        <div className="w-screen lg:w-11/12 max-w-8xl mx-auto">

          <div className="w-11/12 lg:w-full mx-auto space-y-3">
            <p className="text-xs lg:text-sm font-bold text-accent">{article.category}</p>
            <h1 className="text-6xl lg:text-8xl font-extrabold leading-2">{article.title}</h1>
            <p className="text-lg lg:text-2xl text-gray-700 max-w-xl">{article.summary}</p>
          </div>
          <div className="my-8 w-full aspect-w-2 aspect-h-1">
            <img className="object-cover" src={article.featured_image} />
          </div>
        </div>

        <div className="w-11/12 mx-auto max-w-2xl divide-y">
          <div className="flex flex-row items-center text-ssm justify-between pb-4">
            <div className="flex flex-row items-center space-x-2">
              <img className="w-10 h-10" src="/img/max.png" />
              <p className="font-light">by <span className="font-extrabold">{article.author}</span></p>
            </div>
            <p className="font-light text-gray-500">{article.date}</p>
          </div>
          <ReactMarkdown rehypePlugins={[rehypeSanitize, rehypeRaw]} className="prose prose-lg lg:prose-xl pt-16" children={article.content} />
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
