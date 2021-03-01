import Screen from "components/card/Screen.js";
import { join } from "path";
import Link from "next/link";

const AppCard = ({ app }) => (
  <div>
    <div className="flex mt-10">
      <div>
        <Link href={`/apps/${app.slug}`}>
          <a>
            <img className="app-logo" src={`/${app.icon}`} className="w-10" />
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
        app.device === "mobile" ? "grid-cols-6" : "grid-cols-2",
      ].join(' ')}
    >
      {app.screens.map((screen) => {
        return (
        <Link href={`/apps/${app.slug}`}>
          <a><Screen url={screen.image} style={app.type} /></a>
          </Link>
          )
      })}
    </div>
  </div>
);

export default AppCard;
