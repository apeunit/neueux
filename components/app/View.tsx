import React from "react";
import Screen from "components/app/screen/Card";
import Link from "next/link";

const AppView = ({ app, screens, preview }) => {
  return (
    <div
      className={[
        "mt-5 grid  gap-5",
        app?.device === "mobile"
          ? "lg:grid-cols-6 sm:grid-cols-3 md:grid-cols-1/4 grid-cols-2"
          : "lg:grid-cols-2 grid-cols-1 md:grid-cols-1 sm:grid-cols-1",
      ].join(" ")}
    >
      {screens?.map((screen) => {
        if (!screen?.image) return null;

        if (preview) return <Screen url={screen.image} style={app?.device} />;

        return (
          <Link
            key={`screen-card-${screen.id}`}
            href={`/apps/${app.slug}/screen/${screen.id}`}
          >
            <a className="lg:mb-5 mb-0">
              <Screen url={screen.image} style={app?.device} />
            </a>
          </Link>
        );
      })}
    </div>
  );
};

export default AppView;
