import Link from "next/link";
import Layout from "../components/Layout";
import tw from "twin.macro";

const Button = tw.button`border px-2 bg-red-200	`

const IndexPage = () => (
  <Layout title="Home | Next.js + TypeScript Example">
    <h1 className="red">Hello Next.js 👋</h1>
    <p className="text-lg font-semibold">
      <Link href="/about">
        <a>About</a>
      </Link>
    </p>
    <Button className="text-red-900 my-3">Hello Twin Macro</Button>
  </Layout>
);

export default IndexPage;
