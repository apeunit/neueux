
const ScreenCard = ({ url, style }) => (
  <div
    className={[
      style === "desktop" ? "desktop-screen-card" : "mobile-screen-card ",
      "relative h-full w-full text-center",
    ].join(" ")}
  >
    
      <img src={`/${url}`} className="h-full inline-block" />
  </div>
);

export default ScreenCard;
