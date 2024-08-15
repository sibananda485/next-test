import { HomeIcon, Menu, PlusCircle } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useRouter } from "next/navigation";

interface MobileSidebarProps {}

export const MobileSidebar = ({}: MobileSidebarProps) => {
  const router = useRouter();
  return (
    <Sheet>
      <SheetTrigger className="md:hidden pr-4 hover:opacity-75 transition">
        <Menu />
      </SheetTrigger>
      <SheetContent side="left" className="main-gradient text-white p-0">
        <div className="flex flex-col text-lg mt-14">
          <SheetTrigger>
            <button
              onClick={() => router.push("/")}
              className="flex flex-row items-center justify-center w-full py-4 border-b border-t pr-6 border-white hover:bg-white hover:text-black transition"
            >
              <HomeIcon size={30} className="pr-2"/> 
              Home
            </button>
          </SheetTrigger>
          <SheetTrigger>
            <button onClick={() => router.push("/addtopic")} className="flex flex-row pl-2 items-center justify-center w-full py-4 border-b border-white hover:bg-white hover:text-black transition">
            <PlusCircle size={30} className="pr-2"/> 
              Add Topic
            </button>
          </SheetTrigger>
        </div>
      </SheetContent> 
    </Sheet>
  );
};