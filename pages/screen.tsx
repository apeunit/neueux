// import Layout from "../components/Layout";
import React from "react";
// import AppCard from "../components/card/App";
const ScreenPage = () => {
  //   const apps = {
  //     screens: { image: "/img/2.png" },
  //   };
  return (
    <main>
      {/* <AppCard app={apps} />; */}
      <div className="flex">
        <div className="mt-16 mb-16 w-full flex justify-center ">
          <img src="./img/2.png" className="card1" />
        </div>
        <div className="h-screen w-96 bg-gray-50  mr-auto">
          <div className="absolute right-4 top-4">
            <div className="bg-gray-50 rounded-full border-2 border-solid border-gray-200 ml-2">
              <a href="">
                <img src="/img/close.png" className="m-3.5" />
              </a>
            </div>
          </div>
          <div className="text-center mt-56">
            <div className="flex justify-center">
              <img src="/img/bitpay.png" />
            </div>
            <p className="text-sm mt-4 font-extrabold leading-6 tracking-tighter">
              BitPay - Buy Crypto
            </p>
            <span className="text-sm text-gray-500 mt-1 tracking-tighter leading-6">
              A Secure Bitcoin Wallet
            </span>
          </div>
          <div className="border-b-2 border-solid mx-8 mt-5 mb-6"></div>
          <div className="flex justify-center flex-wrap mx-6">
            <div className="mb-3">
              <a className="bg-gray-50 px-4 py-1.5 text-xs rounded-2xl border-2 border-solid border-gray-200 font-bold text-gray-500">
                Onboarding
              </a>
            </div>
            <div className="mx-1 mb-3">
              <a className="bg-gray-50 px-4 py-1.5 text-xs rounded-2xl border-2 border-solid border-gray-200 font-bold text-gray-500">
                Balance
              </a>
            </div>
            <div className="rounded-full mb-3">
              <a className="bg-gray-50 px-4 py-1.5 text-xs rounded-2xl border-2 border-solid border-gray-200 font-bold text-gray-500">
                Home screen
              </a>
            </div>
          </div>
          <div className="flex absolute right-4 bottom-4">
            <div className="bg-gray-50 rounded-full border-2 border-solid border-gray-200 ">
              <a href="">
                <img src="/img/right-arrow.png" className="m-3.5" />
              </a>
            </div>
            <div className="bg-gray-50 rounded-full border-2 border-solid border-gray-200 ml-2">
              <a href="">
                <img src="/img/left-arrow.png" className="m-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
export default ScreenPage;
