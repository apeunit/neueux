import Link from "next/link";
import RightIcon from "assets/icons/right.svg";
import LeftIcon from "assets/icons/left.svg";

const NavigationButton = ({ children, disabled, orientation = "next" }) => (
  <div
    data-navigation={orientation}
    className={[
      "bg-gray-50 rounded-full border-2 border-solid border-gray-200 p-3.5",
      disabled ? "opacity-40" : "hover:bg-gray-200",
    ].join(" ")}
  >
    {children}
  </div>
);

const ScreenNavigation = ({ navigation, query }) => {
  const renderLink = (url, children) => {
    if (url) {
      return (
        <Link
          href={{
            pathname: String(url),
            query,
          }}
        >
          <a>{children}</a>
        </Link>
      );
    }
    return children;
  };
  
  const handleKeyDown = (event) => {
    const key = event.nativeEvent.code;
    switch (key) {
      case 'KeyW':
        //moveTop();
        break;
      case 'KeyA':
        //moveLeft();
        break;
      case 'KeyD':
        //moveRight();
        break;
      default:
      //custom logic  
    }
  }

  return (
    <div className="relative flex space-x-2">
      {renderLink(
        navigation.prev,
        <NavigationButton disabled={!navigation.prev} orientation="previous" onKeyPress={handleKeyDown}>
          <LeftIcon />
        </NavigationButton>
      )}

      {renderLink(
        navigation.next,
        <NavigationButton disabled={!navigation.next} orientation="next">
          <RightIcon />
        </NavigationButton>
      )}
    </div>
  );
};

export default ScreenNavigation;
