import { type } from "os";

const ScreenCard = ({ url, style }) => (
  <div className={style === "desktop" ? "desktop-card mb-12 xl:mb-0" : "card w-5/12 mb-12 xl:mb-0"}>
    <img src={url} />
  </div>
);

export default ScreenCard;
