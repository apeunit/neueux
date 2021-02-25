import Screen from "components/card/Screen.js";
import { join } from "path";

const AppCard = ({ screen }) => (
  <div>
  
    <div className="mt-5">
        <Screen url={screen.image} />;
    </div>
  </div>
);

export default AppCard;
