import Screen from "components/app/screen/Card";
import Link from "next/link";

const AppCard = ({ app }) => (
  <div className="lg:mb-10 xl:mt-0">
    <div className="flex mt-3">
      <div className="filter-drop-shadow bg-white rounded-lg">
        <Link href={`/apps/${app.slug}`}>
          <a>
            <img className="w-10 h-10 rounded-lg" src={`/${app.icon}`} />
          </a>
        </Link>
      </div>
      <div className="mx-3 mt-2 text-sm font-bold">
        <h3 className="">
          <Link href={`/apps/${app.slug}`}>{app.name}</Link>{" "}
        </h3>
      </div>
    </div>

    <div
      className={[
        "mt-5 grid  gap-5",
        app.device === "mobile"
          ? "xl:grid-cols-6 grid-cols-2 md:grid-cols-3"
          : "grid-cols-2",
      ].join(" ")}
    >
      {app.screens.map((screen, i) => {
        return (
          <div
            key={`screen-card-view-${screen.slug}`}
            className={[
              (i > 1 && app.device === "mobile") ||
                (i > 0 && app.device === "desktop")
                ? "hidden xl:block"
                : "block",
              (i > 2 && app.device === "mobile") ||
                (i > 1 && app.device === "desktop")
                ? "hidden xl:block"
                : "md:block sm:block lg:block",
            ].join(" ")}
          >
            <Link href={`/apps/${app.slug}`}>
              <a>
                <Screen url={screen.image} style={app.device} />
              </a>
            </Link>
          </div>
        );
      })}
    </div>
  </div>
);

export default AppCard;
