
const ScreenCard = ({ url, style }) => (
  <div
    className={[
      style === "desktop" ? "desktop-screen-card" : "mobile-screen-card ",
      "mb-12 xl:mb-0 rounded-lg filter-drop-shadow overflow-hidden cursor-pointer relative h-full w-full text-center",
    ].join(" ")}
  >   
      <img src={`/${url}`} className="inline-block"/>
  </div>
);

export default ScreenCard;
