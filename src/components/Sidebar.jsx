import React, { useState, useEffect } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { RiMenuUnfoldFill } from "react-icons/ri";
import { GrHomeRounded } from "react-icons/gr";
import { LuClipboardList } from "react-icons/lu";
import { TiThLargeOutline } from "react-icons/ti";
import { CiDeliveryTruck } from "react-icons/ci";
import { CiBullhorn } from "react-icons/ci";
import { PiChartBarLight } from "react-icons/pi";
import { MdPayments } from "react-icons/md";
import { CiDiscount1, CiWallet } from "react-icons/ci";
import { FiUsers } from "react-icons/fi";
import { IoColorPaletteOutline, IoFlashOutline } from "react-icons/io5";
import Navbar from "./Navbar";
import Home from "./Home";

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    const bodyContent = document.getElementById("body-main-content");

    const closeSidebar = () => {
      setIsSidebarOpen(false);
    };

    bodyContent.addEventListener("click", closeSidebar);

    return () => {
      bodyContent.removeEventListener("click", closeSidebar);
    };
  }, []);

  return (
    <>
      <div className="sidebar-container">
        <button
          className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg lg:hidden"
          type="button"
          onClick={toggleSidebar}
        >
          <RiMenuUnfoldFill className="w-6 h-6" color="currentColor" />
        </button>
        <aside
          className={`fixed scroll-smooth top-0 left-0 z-40 w-64 h-screen transition-transform ${
            isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          } lg:translate-x-0`}
          aria-label="Sidebar"
        >
          <div className="h-full px-3 py-5 overflow-y-auto bg-gray-50 dark:bg-gray-800 flex flex-1 flex-col justify-between">
            <nav className="space-y-6">
              <div className="text-white rounded-md mx-4">
                <div className="flex items-center justify-between py-2">
                  <div className="flex">
                    <img alt="img here" className="h-12 rounded-md mr-4" />
                    <div>
                      <h1 className="text-lg">Sparkathon</h1>
                      <a href="#" className="text-gray-300 underline text-sm">
                        Visit store
                      </a>
                    </div>
                  </div>
                  <div className="p-1 transition-colors duration-200 cursor-pointer">
                    <IoIosArrowDown color="white" fontSize={20} />
                  </div>
                </div>
              </div>
              <ul className="space-y-1 font-medium">
                <li>
                  <a
                    href="#"
                    className="flex items-center p-2 text-gray-900 rounded-md dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                  >
                    <GrHomeRounded className="text-xl" />
                    <span className="ms-3">Home</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center p-2 text-gray-900 rounded-md dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                  >
                    <LuClipboardList className="text-xl" />
                    <span className="flex-1 ms-3 whitespace-nowrap">
                      Orders
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center p-2 text-gray-900 rounded-md dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                  >
                    <TiThLargeOutline className="text-xl" />
                    <span className="flex-1 ms-3 whitespace-nowrap">
                      Products
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center p-2 text-gray-900 rounded-md dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                  >
                    <CiDeliveryTruck className="text-xl" />
                    <span className="flex-1 ms-3 whitespace-nowrap">
                      Delivery
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center p-2 text-gray-900 rounded-md dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                  >
                    <CiBullhorn className="text-xl" />
                    <span className="flex-1 ms-3 whitespace-nowrap">
                      Marketing
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center p-2 text-gray-900 rounded-md dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                  >
                    <PiChartBarLight className="text-xl" />
                    <span className="flex-1 ms-3 whitespace-nowrap">
                      Analytics
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center p-2 text-gray-900 rounded-md dark:text-white hover:bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-700 group"
                  >
                    <MdPayments className="text-xl" />
                    <span className="flex-1 ms-3 whitespace-nowrap">
                      Payouts
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center p-2 text-gray-900 rounded-md dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                  >
                    <CiDiscount1 className="text-xl" />
                    <span className="flex-1 ms-3 whitespace-nowrap">
                      Discounts
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center p-2 text-gray-900 rounded-md dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                  >
                    <FiUsers className="text-xl" />
                    <span className="flex-1 ms-3 whitespace-nowrap">
                      Audience
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center p-2 text-gray-900 rounded-md dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                  >
                    <IoColorPaletteOutline className="text-xl" />
                    <span className="flex-1 ms-3 whitespace-nowrap">
                      Appearence
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center p-2 text-gray-900 rounded-md dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                  >
                    <IoFlashOutline className="text-xl" />
                    <span className="flex-1 ms-3 whitespace-nowrap">
                      Plugins
                    </span>
                  </a>
                </li>
              </ul>
            </nav>
            <div className="bg-gray-700 text-white rounded-md px-4 mx-4">
              <div className="flex items-center justify-between py-2">
                <div className="bg-gray-600 p-1 rounded-md">
                  <CiWallet color="white" fontSize={30} />
                </div>
                <div className="">
                  <p className="text-gray-300">Available credits</p>
                  <h1>222.10</h1>
                </div>
              </div>
            </div>
          </div>
        </aside>
      </div>

      <div id="body-main-content" style={{ backgroundColor: "#f1f1f1" }}>
        <Navbar />
        <div className="p-4 lg:ml-64">
          <div className="p-4 rounded-lg">
            <Home />
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
