import Screen from "components/card/Screen";
import Link from "next/link";

const AppCard = ({ app }) => (
  <div>
    <div className="flex mt-3">
      <div>
        <Link href={`/apps/${app.slug}`}>
          <a>
            <img
              className="w-10 h-10 filter-drop-shadow rounded-lg"
              src={`/${app.icon}`}
            />
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
        app.device === "mobile" ? "xl:grid-cols-6 grid-cols-2" : "grid-cols-2",
      ].join(" ")}
    >
      {app.screens.map((screen) => {
        return (
          <Link
            key={`screen-card-view-${screen.slug}`}
            href={`/apps/${app.slug}/screen/${screen.slug}`}
          >
            <a>
              <Screen url={screen.image} style={app.type} />
            </a>
          </Link>
        );
      })}
    </div>
  </div>
);

export default AppCard;
