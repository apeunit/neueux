import Screen from "components/card/Screen.js";
import { join } from "path";

const AppCard = ({ app }) => (
  <div>
    <div className="flex mt-10">
      <div>
        <img className="app-logo" src={app.logo} />
      </div>
      <div className="mx-3 mt-2 text-sm font-bold">
        <h3 className=""> {app.name} </h3>
      </div>
    </div>

    <div className="mt-5 flex space-x-5">
      {app.screens.map((screen) => {
        return <Screen url={screen.image} style={app.type} />;
      })}
    </div>
  </div>
);

export default AppCard;
