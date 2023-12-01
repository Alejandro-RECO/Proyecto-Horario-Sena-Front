import React from "react";

// components
import { SidebarHead } from "./components/SidebarHead";
import { SidebarBody } from "./components/SidebarBody";

// Iconos
import {
  RiMenu3Line,
  RiCloseFill,
} from "react-icons/ri";

// hooks
import { useState } from "react";

const Sidebar = () => {
  const [showSubMenu, setShowSubMenu] = useState(true);
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <>
      <div
        className={`xl:h-[100vh] lg:w-[40%] xl:w-[100%] overflow-hidden webki md:w-[50%] fixed xl:static w-[80%] h-full  top-0 flex flex-col z-50  ${showSidebar ? "left-0" : "-left-full"
      } transition-all`}>
        <div className="flex flex-col gap-1 h-full">
          <SidebarHead/>
          <SidebarBody/>
        </div>

      </div>
      <button
        onClick={() => setShowSidebar(!showSidebar)}
        className="fixed bottom-4 right-4 bg-primary text-black p-3 rounded-full z-50 xl:hidden"
      >
        {!showSidebar ? (
          <RiMenu3Line className="text-1xl" />
        ) : (
          <RiCloseFill className="text-1xl" />
        )}
      </button>
    </>
  );
};

export default Sidebar;