import { GetStaticProps } from "next";
import Layout from "components/Layout";
import React from "react";
import Link from "next/link";
import ArrowIcon from "assets/icons/arrow.svg";
import Button from "components/Button";
import matter from "gray-matter";
import ReactMarkdown from "react-markdown";

const ImprintPage = ({ content }) => {
  return (
    <Layout title="About">
      <div className="w-11/12 mx-auto mt-5">
        <Link href="/">
          <a className=" ">
            <Button type="secondary" size="lg">
              <ArrowIcon className="inline-block mr-2" />
              Back
            </Button>
          </a>
        </Link>
      </div>

      <main className="max-w-xl mx-auto lg:max-w-3xl xl:relative px-5 md:px-10">
        <article className="prose plain-page lg:prose-xl md:prose-xl sm:prose-xl list">
          <ReactMarkdown escapeHtml={true} source={content} />
        </article>
      </main>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  // Import our .md file using the `slug` from the URL
  const content = await import(`content/imprint.md`);

  const output = matter(content.default);
  //   console.log(data);
  return {
    props: {
      content: output.content,
      data: output.data,
    },
  };
};

export default ImprintPage;
