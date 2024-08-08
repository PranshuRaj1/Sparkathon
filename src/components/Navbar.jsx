import React from "react";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { FaSearch } from "react-icons/fa";
import { RiArrowDownSFill } from "react-icons/ri";
import "../App.css";

const Navbar = () => {
    const PayoutInfo = () => (
        <span className="flex items-center justify-center text-sm text-gray-700 pl-1">
            <a href="#">
                <AiOutlineQuestionCircle />
            </a>
            <span className="pl-1">How it works</span>
        </span>
    );

    const SearchBar = () => (
        <div className="w-full flex items-center bg-[#f2f2f2] px-4 rounded-md">
            <FaSearch color="gray" />
            <input
                type="text"
                className="rounded-md bg-gray-100 pl-2 py-3 w-full text-sm outline-none"
                placeholder="Search features, tutorials, etc."
            />
        </div>
    );

    const MobileSearchBar = () => (
        <div className="block lg:hidden px-4 py-4">
            <SearchBar />
        </div>
    );

    const DesktopSearchBar = () => (
        <div className="hidden lg:block w-96 px-4 py-1">
            <SearchBar />
        </div>
    );

    const ActionButtons = () => (
        <div className="block">
            <button className="rounded-full bg-gray-200 p-4 text-sm font-semibold text-white shadow-sm hover:bg-gray-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M18.4211 0.0237288L1.11579 3.38234C0.463158 3.49896 0 4.1287 0 4.85174V12.5019C0 13.225 0.463158 13.8547 1.11579 13.9713L2.88421 14.3212C3.6 15.6273 4.94737 17.8897 6.75789 19.7323C7.36842 20.362 8.37895 19.8022 8.25263 18.8693C8.08421 17.6331 8.12632 16.3037 8.18947 15.3707L18.4211 17.3766C19.2421 17.5398 20 16.8401 20 15.9072V1.49312C20 0.560174 19.2421 -0.139537 18.4211 0.0237288ZM6.46316 9.6331C6.46316 9.88966 6.27368 10.0996 6.04211 10.0996H4.31579C4.08421 10.0996 3.89474 9.88966 3.89474 9.6331V7.72056C3.89474 7.464 4.08421 7.25408 4.31579 7.25408H6.04211C6.27368 7.25408 6.46316 7.464 6.46316 7.72056V9.6331ZM11.2842 9.6331C11.2842 9.88966 11.0947 10.0996 10.8632 10.0996H9.13684C8.90526 10.0996 8.71579 9.88966 8.71579 9.6331V7.72056C8.71579 7.464 8.90526 7.25408 9.13684 7.25408H10.8632C11.0947 7.25408 11.2842 7.464 11.2842 7.72056V9.6331ZM16.1263 9.6331C16.1263 9.88966 15.9368 10.0996 15.7053 10.0996H13.9789C13.7474 10.0996 13.5579 9.88966 13.5579 9.6331V7.72056C13.5579 7.464 13.7474 7.25408 13.9789 7.25408H15.6842C15.9158 7.25408 16.1053 7.464 16.1053 7.72056V9.6331H16.1263Z" fill="#4D4D4D" />
                </svg>
            </button>
            <button className="rounded-full bg-gray-200 p-4 text-sm font-semibold text-white shadow-sm hover:bg-gray-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black">
                <RiArrowDownSFill fontSize={20} color="black" />
            </button>
        </div>
    );

    return (
        <div className="relative bg-white shadow-lg lg:ml-64">
            <div className="mx-auto flex items-center justify-between px-4 py-3 lg:px-5">
                <div className="inline-flex items-center space-x-2">
                    <span className="p-2 text-2xl font-[600]">Payouts</span>
                    <PayoutInfo />
                </div>
                <DesktopSearchBar />
                <ActionButtons />
            </div>
            <MobileSearchBar />
        </div>
    );
};

export default Navbar;