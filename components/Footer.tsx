import React from "react";
import Link from "next/link";
import { useCMS } from "tinacms";
import Button from "components/Button";

const Footer = ({ editable }) => {
  const cms = useCMS();
  return (
    <footer className="w-11/12 mx-auto border-t pt-4 pb-6 mt-24 border-gray-200">
      <div className="lg:flex md:flex justify-between text-gray-500 p-6 pb-24 lg:pb-0 md:pb-0">
        <div className="lg:w-1/3 sm:w-1/3 md:w-1/3 w-full text-sm">
          <p>
            We are a network of designers, researchers and developers initiated
            by <a className="cursor-pointer underline">Ape Unit.</a> If this is interesting to you, please <a className="cursor-pointer underline">get in touch.</a>
          </p>
          <p className="leading-loose text-sm pt-3.5">
            <Link href="/imprint">Imprint</Link>
          </p>
        </div>
        <div className="text-center lg:w-1/3 sm:w-1/3 md:w-1/3 w-full pb-10 lg:pb-0 md:pb-0 ">
          <span className="text-4xl">👹</span>
          <p className="text-gray-500 leading-loose text-sm pt-7">Supported by <a className="cursor-pointer underline">MolochDAO.</a></p>
        </div>
        {editable && (
          <div className="lg:w-1/3 sm:w-1/3 md:w-1/3 w-full lg:text-right sm:text-right md:text-right hidden lg:block md:block sm:block">
            <Button onClick={() => cms.toggle()} size="lg">
              {cms.enabled ? "Exit edit mode" : "Edit this site"}
            </Button>
          </div>
        )}
      </div>
    </footer>
  );
};

export default Footer;
