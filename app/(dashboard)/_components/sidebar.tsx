import Logo from "./logo";
import SidebarRoutes from "./sidebar-rotes";


export default function Sidebar() {
  return (
    <div className="h-full border-r flex flex-col overflow-y-auto bg-white shadow-sm text-black">
        <div className="p-6 items-center justify-center flex"> 
            <Logo/>
        </div>

        <div className="flex flex-col w-full">
            <SidebarRoutes/>
        </div>
    </div>
  )
}
