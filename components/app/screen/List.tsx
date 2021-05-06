import Screen from "components/app/screen/Card";
import Link from "next/link";
import { AppContent } from "lib/app";
import { ScreenContent } from "lib/screen";

type Props = {
  app: AppContent;
  screens?: ScreenContent[];
  showAll?: boolean;
  preview?: boolean;
};

const ScreenList = ({
  app,
  screens,
  showAll = false,
  preview = false,
}: Props) => {
  const style = (i) => {
    if (showAll) return [];

    return [
      (i > 1 && app.device === "mobile") || (i > 0 && app.device === "desktop")
        ? "hidden"
        : "block",
      (i > 2 && app.device === "mobile") || (i > 1 && app.device === "desktop")
        ? "hidden xl:block"
        : "md:block sm:block lg:block",
    ];
  };

  if (!screens || !screens.length) return null;

  return (
    <div
      className={[
        "mt-5 grid  gap-5",
        app?.device === "mobile"
          ? "lg:grid-cols-6 sm:grid-cols-3 md:grid-cols-1/4 grid-cols-2"
          : "lg:grid-cols-2 grid-cols-1 md:grid-cols-1 sm:grid-cols-1",
      ].join(" ")}
    >
      {screens?.map((screen, i) => {
        if (!screen?.image) return null;

        if (preview) return <Screen url={screen.image} style={app?.device} />;

        return (
          <div
            key={`screen-card-view-${screen.id}`}
            className={[...style(i)].join(" ")}
          >
            <Link
              href={
                showAll
                  ? `/apps/${app.slug}/screen/${screen.id}`
                  : `/apps/${app.slug}`
              }
            >
              <a>
                <Screen url={screen.image} style={app.device} />
              </a>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default ScreenList;
