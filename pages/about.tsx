import { GetStaticProps } from "next";
import Layout from "components/Layout";
import React from "react";
import matter from "gray-matter";
import ReactMarkdown from "react-markdown";

const AboutPage = ({ content, data }) => {
  const frontmatter = data;
  return (
    <Layout title="About" backButton>
      <main className="max-w-xl mx-auto lg:max-w-3xl xl:relative px-5 md:px-10">
        <div className="text-center">
          <img src={frontmatter.cover} alt="" className="" />
        </div>

        <div className="py-4">
          <h1 className="lg:text-5xl md:text-5xl font-bold sm:text-5xl text-3xl">
            {frontmatter.title}
          </h1>
        </div>
        <div>
          <p className="lg:text-2xl md:text-2xl sm:text-2xl text-base">
            {frontmatter.description}
          </p>
        </div>
        <div className="my-10 border-b border-solid border-gray-100 ">
          <div className="mb-4 flex items-center">
            <div className="w-10 h-10  border border-solid border-gray-100 rounded-full">
              <img src={frontmatter.authorAvatar} alt="" />
            </div>
            <div className="mx-2 flex-grow">
              <span>
                by <b>{frontmatter.author}</b>
              </span>
              <p className="text-gray-500 md:hidden sm:hidden lg:hiddens">
                {frontmatter.date}
              </p>
            </div>

            <div className="justify-end hidden lg:block md:block sm:block text-gray-500">
              <p>{frontmatter.date}</p>
            </div>
          </div>
        </div>
        <article className="prose lg:prose-xl md:prose-xl sm:prose-xl list">
          <ReactMarkdown children={content} ></ReactMarkdown>
        </article>
      </main>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async ({ preview }) => {
  // Import our .md file using the `slug` from the URL
  const content = await import(`content/about.md`);

  const output = matter(content.default);
  //   console.log(data);
  return {
    props: {
      content: output.content,
      data: output.data,
      preview: preview || false,
    },
  };
};

export default AboutPage;
