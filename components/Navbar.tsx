"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { MobileSidebar } from "./MobilSidebar";

const Navbar = () => {
  const router = useRouter();
  return (
    <nav
      className="flex flex-row justify-between md:justify-center navbar-gradient p-5 text-white text-lg sm:text-xl md:text-xl font-medium border-b-[0.1px] border-gray-400
     shadow-sm items-center"
    >
      <ul className=" hidden md:flex flex-row gap-x-4 md:gap-x-8 cursor-pointer">
        <li>TopicList</li>
        <li onClick={() => router.push("/")}>Home</li>
        <li onClick={() => router.push("/addtopic")}>Add Topic</li>
      </ul>
      <div className="md:hidden block"><MobileSidebar/></div>
      <h1 className="md:hidden block">TopicList</h1>
      <Image className="md:hidden" src="/favicon.png" alt="Logo" height={30} width={30}></Image>
    </nav>
  );
};

export default Navbar;
