import React from "react";
import Link from "next/link";
import { useCMS } from "tinacms";
import Button from "components/Button";

const Footer = ({ editable }) => {
  const cms = useCMS();
  return (
    <footer className="w-11/12 mx-auto border-t pt-4 pb-6 mt-40 border-gray-200 flex items-center">
      <div>
        <p className="text-gray-500 leading-loose">
          <Link href="/imprint">Imprint</Link>
        </p>
      </div>
      {editable && (
        <div className="ml-auto">
          <Button
            onClick={() => cms.toggle()}
          >
            {cms.enabled ? "Exit edit mode" : "Edit this site"}
          </Button>
        </div>
      )}
    </footer>
  );
};

export default Footer;
