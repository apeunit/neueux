import React from "react";
import Link from "next/link";
import ArrowIcon from "assets/icons/arrow.svg";
import Button from "components/Button";

const BackButton = ({url}: {url?: string}) => (
  <div className="w-11/12 mx-auto mt-5">
      <Link href={url || '/'}>
      <a>
        <Button type="secondary" size="lg">
          <ArrowIcon className="inline-block mr-2" />
          Back
        </Button>
      </a>
    </Link>
  </div>
);

export default BackButton;
