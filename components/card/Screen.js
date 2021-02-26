import { type } from "os";

const ScreenCard = ({ url, style }) => (
  <div
    className={[
      style === "desktop" ? "desktop-screen-card" : "mobile-screen-card ",
      "mb-12 xl:mb-0 rounded-lg filter-drop-shadow overflow-hidden",
    ].join(" ")}
  >
    <img src={`/${url}`} className="w-full" />
  </div>
);

export default ScreenCard;
