
import Layout from "../components/Layout";
import Navbar from "components/Navbar";


// const Button = tw.button`border px-2 bg-red-200	`

const HomePage = () => (
  <Layout title="Home | Next.js + TypeScript Example">
    <Navbar/>
    <main className="w-11/12 mx-auto">
      <div className="mt-32">
        <div className="flex">
          <div className="w-3/6 text-5xl leading-loose tracking-tighter">
          <h1>Screen gallery</h1>
          </div>
        
        <div className="text-right w-3/6 text-xs mt-11">
          <a className="bg-black text-white text-xs px-4 leading-4 py-3 transition-250ms rounded-full">Filter by Categories</a>
        </div>

        </div>
      </div>

      <div>
      <div className="flex mt-10">
        <div className="h-10 w-10 shadow-2xl bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 rounded-lg">
        {/* <img src="/public/img/logo.png"/> */}
        </div>
        <div className="mx-3 mt-2 text-sm font-bold">
          <h3 className=""> Argent - DeFi in a tap</h3>
        </div>
      </div>

      <div className="mt-5 flex flex-wrap">
          <div className="w-44 h-96  shadow-xs rounded-lg border border-gray-100"> 
          </div>
          <div className="w-44 h-96 ml-5 shadow-xs rounded-lg border border-gray-100"> 
          </div>
          <div className="w-44 h-96 ml-5 shadow-xs rounded-lg border border-gray-100"> 
          </div>
          <div className="w-44 h-96 ml-5 shadow-xs rounded-lg border border-gray-100"> 
          </div>
          <div className="w-44 h-96 ml-5 shadow-xs rounded-lg border border-gray-100"> 
          </div>
          <div className="w-44 h-96 ml-5 shadow-xs rounded-lg border border-gray-100"> 
          </div>
          <div className="w-44 h-96 ml-5 shadow-xs rounded-lg border border-gray-100"> 
          </div>
          
      </div>
      </div>

      <div>
      <div className="flex mt-10">
        <div className="h-10 w-10 shadow-2xl bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 rounded-lg">
        {/* <img src="/public/img/logo.png"/> */}
        </div>
        <div className="mx-3 mt-2 text-sm font-bold">
          <h3 className=""> Argent - DeFi in a tap</h3>
        </div>
      </div>

      <div className="mt-5 flex flex-wrap">
          <div className="w-44 h-96  shadow-xs rounded-lg border border-gray-100"> 
          </div>
          <div className="w-44 h-96 ml-5 shadow-xs rounded-lg border border-gray-100"> 
          </div>
          <div className="w-44 h-96 ml-5 shadow-xs rounded-lg border border-gray-100"> 
          </div>
          <div className="w-44 h-96 ml-5 shadow-xs rounded-lg border border-gray-100"> 
          </div>
          <div className="w-44 h-96 ml-5 shadow-xs rounded-lg border border-gray-100"> 
          </div>
          <div className="w-44 h-96 ml-5 shadow-xs rounded-lg border border-gray-100"> 
          </div>
          <div className="w-44 h-96 ml-5 shadow-xs rounded-lg border border-gray-100"> 
          </div>
          
      </div>
      </div>


      <div>
      <div className="flex mt-10">
        <div className="h-10 w-10 shadow-2xl bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 rounded-lg">
        {/* <img src="/public/img/logo.png"/> */}
        </div>
        <div className="mx-3 mt-2 text-sm font-bold">
          <h3 className=""> Argent - DeFi in a tap</h3>
        </div>
      </div>

      <div className="mt-5 flex flex-wrap">
          <div className="2.5/5 h-96  shadow-xs rounded-lg border border-gray-100"> 
          </div>
          <div className="2.5/5 h-96 ml-5 shadow-xs rounded-lg border border-gray-100"> 
          </div>
          
      </div>
      </div>

      
      
    </main>
  </Layout>
);

export default HomePage;
