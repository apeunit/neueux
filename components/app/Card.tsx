import Screen from "components/app/screen/Card";
import Link from "next/link";
import Image from "next/image";

const AppCard = ({ app }) => (
  <div className="lg:mb-10 xl:mt-0">
    <div className="flex mt-3">
      {app.icon && (
        <Link href={`/apps/${app.slug}`}>
          <a>
            <div className="h-10 w-10 inline-block filter-drop-shadow-view rounded-lg bg-white overflow-hidden">
              <Image src={app.icon} layout="fill" />
            </div>
          </a>
        </Link>
      )}
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
            key={`screen-card-view-${screen.id}`}
            className={[
              (i > 1 && app.device === "mobile") ||
              (i > 0 && app.device === "desktop")
                ? "hidden"
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
