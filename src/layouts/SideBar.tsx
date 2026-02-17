import { Clapperboard, Home, Library, Repeat } from "lucide-react";
import type { ElementType } from "react";
import { buttonStyles } from "../components/Button";
import { twMerge } from "tailwind-merge";


const SideBar = () => {
  return (
    <>
    <aside className="sticky top-0 overflow-y-auto scrollbar-hidden pb-4 flex flex-col ml-1 lg:hidden">
        <SmallSidebarItem Icon={Home} title="Home" url="/" />
        <SmallSidebarItem Icon={Repeat} title="Shorts" url="/shorts" />
        <SmallSidebarItem Icon={Clapperboard} title="Subscriptions" url="/subscriptions" />
        <SmallSidebarItem Icon={Library} title="Library" url="/library" />
    </aside>
    <aside >
        
    </aside>
    </>
  )
}

export default SideBar


type SmallSidebarItemProps = {
    Icon: ElementType;
    title: string;
    url: string;
}

export function SmallSidebarItem({ Icon, title, url }: SmallSidebarItemProps) {
    return (
        <a 
        href={url} 
        className={twMerge(buttonStyles({variant: "ghost"}), "py-4 px-1 flex flex-col items-center rounded-lg gap-1")}>
            <Icon className="h-6 w-6" />
            <div className="text-sm">{title}</div>
        </a>
    )
}