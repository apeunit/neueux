import Screen from "components/card/Screen.js";
import { join } from "path";
import Link from "next/link";

const AppCard = ({ app }) => (
  <div>
    <div className="flex mt-10">
      <div>
        <Link href={`/apps/${app.slug}`}>
          <a>
            <img className="app-logo" src={app.logo} />
          </a>
        </Link>
      </div>
      <div className="mx-3 mt-2 text-sm font-bold">
        <h3 className="">
          <Link href={`/apps/${app.slug}`}>{app.name}</Link>{" "}
        </h3>
      </div>
    </div>

    <div className="mt-5 mb-7 flex space-x-5">
      {app.screens.map((screen) => {
        return <Screen url={screen.image} style={app.type} />;
      })}
    </div>
  </div>
);

export default AppCard;
