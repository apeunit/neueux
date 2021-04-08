import Image from "next/image";

const ScreenCard = ({ url, style }) => (
  <div
    className={[
      style === "desktop" ? "desktop-screen-card" : "mobile-screen-card ",
      "mb-12 xl:mb-0 rounded-lg filter-drop-shadow overflow-hidden cursor-pointer relative h-full w-full text-center",
    ].join(" ")}
  >
    <Image
      src={`${url}`}
      width={style === "desktop" ? 580 : 144}
      height={style === "desktop" ? 380 : 304}
      layout="responsive"
    />
  </div>
);

export default ScreenCard;
