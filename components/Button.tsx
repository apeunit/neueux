import React, { ReactNode } from "react";

type Props = {
  children?: ReactNode;
  type?: string;
  size?: string;
  id?: string;
  onClick?: () => void;
  disabled?: boolean;
  rounded?: boolean;
};

const styles = ({ type, size }: { type?: string; size?: string }) => {
  let style = "";
  let sizeStyle = "";
  switch (type) {
    case "primary":
      style = "bg-black text-white";
      break;
    case "secondary":
      style = "bg-gray-100 text-black hover:bg-gray-200 mr-2 mb-3";
      break;
    case "tertiary":
      style = "bg-transparent border border-solid border-color text-gray-500";
      break;
    case "transparent":
      style = "bg-transparent text-black";
      break;
    default:
      style = "bg-black text-white";
  }

  switch (size) {
    case "sm":
      sizeStyle = "py-4 px-13";
      break;
    case "lg":
      sizeStyle = "py-3 px-4 text-xs text-black leading-4 font-bold";
      break;
    default:
      sizeStyle = "py-5 text-xs px-5";
  }
  return `${style} ${sizeStyle} focus:outline-none cursor-pointer leading-4 transition-250ms`;
};

const Button = ({
  id,
  children,
  type,
  onClick = () => {},
  disabled = false,
  rounded = true,
  size,
}: Props) => (
  <button
    id={id}
    type="button"
    disabled={disabled}
    onClick={onClick}
    className={[
      styles({ type, size }),
      disabled ? "" : "",
      rounded && "rounded-full inline-block",
    ].join(" ")}
  >
    {children}
  </button>
);

export default Button;
