import Link from "next/link";
import Image from "next/image";
import ScreenList from "components/app/screen/List";

const AppCard = ({ app, preview }) => {
  const url = () => {
    return preview ? `/editor/apps/${app.slug}` : `/apps/${app.slug}`
  }

  return (
    <div className="mb-16">
      <div className="flex mt-3">
        {app.icon && (
          <Link href={url()}>
            <a>
              <div className="h-10 w-10 inline-block filter-drop-shadow-view rounded-lg bg-white overflow-hidden">
                <Image src={app.icon} width="40" height="40" />
              </div>
            </a>
          </Link>
        )}
        <div className="mx-3 mt-2 text-sm font-bold">
          <h3 className="">
            <Link href={url()}>{app.name}</Link>{" "}
          </h3>
        </div>
      </div>

      <ScreenList app={app} screens={app.screens} preview={preview} />
    </div>
  )
};

export default AppCard;
