
import { UserflowContent } from './userflows';
import { TagContent } from './tags';
import { listAllAppContent } from './app';

export type ScreenContent = {
    readonly image: string;
    readonly id: string;
    readonly slug: string;
    readonly app: string;
    device?: string;
    readonly userflow?: UserflowContent;
    readonly tags?: TagContent[];
};

let screenCache: ScreenContent[];

function fetchScreenContent(): ScreenContent[] {
    if (screenCache) {
        return screenCache;
    }

    // // Get file names under /screens
    const apps = listAllAppContent();

    const screens = apps.filter((app) => app.screens.length).map((app) => {
        return app.screens
    });

    screenCache = [...new Set(screens.flat())] as ScreenContent[];

    return screenCache;
}

export function listScreenContent(
): ScreenContent[] {
    const apps = listAllAppContent();
    return fetchScreenContent().map((screen) => {
        const app = apps.find((a) => a.slug === screen.app);
        screen.device = app ? app.device : '';
        return screen;
    });
}

export function listAppScreenContent(
    appSlug: string | string[],
    page: number,
    limit: number,
): ScreenContent[] {
    return fetchScreenContent().filter((screen) => screen.app === appSlug).slice((page - 1) * limit, page * limit);
}

export function getAllAppScreenContent(
    appSlug: string | string[],
): ScreenContent[] {
    return fetchScreenContent().filter((screen) => screen.app === appSlug);
}

export function getScreenContent(
    slug: string | string[],
): ScreenContent {
    return fetchScreenContent().find((screen) => screen.slug === slug);
}