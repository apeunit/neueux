import React from "react";
import Link from "next/link";
const Footer = ({}) => (
  <footer className="w-11/12 mx-auto border-t pt-4 pb-6 mt-40 border-gray-200">
    <p className="text-gray-500 leading-loose">
      <Link href="/imprint">Imprint</Link>
    </p>
  </footer>
);

export default Footer;
