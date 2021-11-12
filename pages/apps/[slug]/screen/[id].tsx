import { GetStaticProps, GetStaticPaths } from "next";
import Layout from "components/Layout";
import React from "react";
import ScreenView from "components/app/screen/View";
import { getAppContent, listAllAppContent } from "lib/app";
import { getScreenContent, getAllAppScreenContent } from "lib/screen";

const App = ({
    appData,
    screen,
    screenNavigation,
    preview,
}) => {

    return (
        <Layout
            title={`${appData.name} - Screen view`}
            description={appData.description}
            fill
            image={{
                src: screen.image,
                width: appData.device === "mobile" ? "180" : "580",
                height: appData.device === "mobile" ? "380" : "380",
            }}
        >
            <ScreenView
                key={screen.id}
                screen={screen}
                app={appData}
                navigation={screenNavigation}
            />
        </Layout>
    );
};

export const getStaticProps: GetStaticProps = async ({
    params,
    preview,
}) => {
    const slug = String(params.slug);
    const id = String(params.id);

    const app = getAppContent(slug);

    const screens = getAllAppScreenContent(app.slug);
    const screen = getScreenContent(id);
    const screenNavigation = { prev: null, next: null };

    const screenIndex = screens.map((s) => s.id).indexOf(screen.id);
    screenNavigation.prev =
        screenIndex > 0
            ? `/apps/${app.slug}/screen/${screens[screenIndex - 1].id}`
            : null;
    screenNavigation.next =
        screenIndex < screens.length - 1
            ? `/apps/${app.slug}/screen/${screens[screenIndex + 1].id}`
            : null;

    return {
        props: {
            appData: app,
            screen: screen,
            screenNavigation,
            preview: preview || false,
        },
    };
};

export const getStaticPaths: GetStaticPaths = async () => {
    const apps = listAllAppContent();
    const paths = [];
    apps.forEach((app) => {
        const screens = getAllAppScreenContent(app.slug);
        screens.forEach((screen) => {
            paths.push({
                params: {
                    slug: app.slug,
                    id: screen.id,
                },
            });
        });
    });
    return {
        paths: paths,
        fallback: false,
    };
};

export default App;
