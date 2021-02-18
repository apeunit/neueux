
import Layout from "../components/Layout";
import Navbar from "components/Navbar";


// const Button = tw.button`border px-2 bg-red-200	`

const IndexPage = () => (
  <Layout title="Home | Next.js + TypeScript Example">
    <Navbar/>
    {/* <h1 className="red">Hello Next.js 👋</h1>
    <p className="text-lg font-semibold">
      <Link href="/about">
        <a>About</a>
      </Link>
    </p>
    <Button className="text-red-900 my-3">Hello Twin Macro</Button> */}
  </Layout>
);

export default IndexPage;
