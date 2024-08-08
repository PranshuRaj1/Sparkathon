import React from 'react';
import { PiDownloadSimpleBold } from "react-icons/pi";
import { PiArrowsDownUpLight } from "react-icons/pi";
import { FaSearch } from "react-icons/fa";
import { AiOutlineQuestionCircle } from "react-icons/ai";

const Home = () => {
    return (
        <>
            <div className="flex align-middle items-start justify-between">
                <h1 className="mb-8 text-xl font-[500]">Overview</h1>
                <select className="p-3 border rounded-md">
                    <option value="This Month">This Month</option>
                    <option value="Last Month">Last Month</option>
                </select>
            </div>

            <div className="block md:flex items-center justify-between gap-4">
                <div className="flex w-full mb-3 p-2 md:mb-2 items-center rounded-md md:flex-row bg-white hover:bg-[#146eb4] hover:text-white transition-all drop-shadow-sm">
                    <div className="p-5">
                        <div className="mb-4 mt-1 text-md font-light flex">
                            <span>Next Payouts</span>
                            <span className="flex items-center justify-center text-sm text-gray-100 pl-3">
                                <a href="#">
                                    <AiOutlineQuestionCircle />
                                </a>
                            </span>
                        </div>
                        <span className="text-3xl font-[500]">
                            &#8377;2,312.23
                        </span>
                    </div>
                </div>
                <div className="flex w-full mb-3 p-2 md:mb-2 items-center rounded-md md:flex-row bg-white hover:bg-[#146eb4] hover:text-white transition-all drop-shadow-sm">
                    <div className="p-5">
                        <div className="mb-4 mt-1 text-md font-light flex">
                            <span>Amount Pending</span>
                            <span className="flex items-center justify-center text-sm text-gray-100 pl-3">
                                <a href="#">
                                    <AiOutlineQuestionCircle />
                                </a>
                            </span>
                        </div>
                        <span className="text-3xl font-[500]">
                            &#8377;92,312.20
                        </span>
                    </div>
                </div>
                <div className="flex w-full mb-3 p-2 md:mb-2 items-center rounded-md md:flex-row bg-white hover:bg-[#146eb4] hover:text-white transition-all drop-shadow-sm">
                    <div>
                        <div className="p-5">
                            <div className="mb-4 mt-1 text-md font-light flex">
                                <span>Amount Processed</span>
                                <span className="flex items-center justify-center text-sm text-gray-100 pl-3">
                                    <a href="#">
                                        <AiOutlineQuestionCircle />
                                    </a>
                                </span>
                            </div>
                            <h1 className="inline-flex items-center text-3xl font-[500]">
                                &#8377;23,92,312.19
                            </h1>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <h1 className="mx-3 mt-5 text-xl font-[500]">Transactions | This Month</h1>
            </div>

            <div className='flex'>
                <h1 className="mx-3 mt-5 bg-[#dadada] text-sm text-gray-500 rounded-full px-5 py-2">Payouts (22)</h1>
                <h1 className="mt-5 bg-[#146eb4] text-sm text-white rounded-full px-5 py-2">Refund (6)</h1>
            </div>

            {/* Table */}
            <section className="mx-auto w-full px-4 py-4">
                <div className="mt-5 flex flex-col">
                    <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                            <div className="overflow-hidden border border-gray-200 bg-white md:rounded-lg px-4 drop-shadow-sm">
                                <div className="flex justify-between items-center bg-white py-3">
                                    <div className="flex items-center border pl-4 rounded-md">
                                        <FaSearch color="gray" />
                                        <input
                                            className="px-3 py-2 rounded-md w-80 focus:outline-none text-sm"
                                            type="text"
                                            placeholder="Order ID or transaction ID"
                                        />
                                    </div>
                                    <div className="flex justify-center items-center">
                                        <button className="bg-white border py-2 px-4 rounded-md text-sm mx-3">
                                            <span className="flex items-center">
                                                <span className="pr-1">
                                                    Sort
                                                </span>
                                                <PiArrowsDownUpLight />
                                            </span>
                                        </button>
                                        <button className="bg-white border p-2 rounded-md">
                                            <PiDownloadSimpleBold className="text-lg" />
                                        </button>
                                    </div>
                                </div>
                                <table className="min-w-full divide-gray-200">
                                    <thead className="bg-gray-300">
                                        <tr>
                                            <th className="px-4 py-3 text-left text-sm font-[500]">
                                                Order ID
                                            </th>
                                            <th className="px-4 py-3 text-sm font-[500]"
                                            >
                                                <span>Status</span>
                                            </th>

                                            <th className="px-4 py-3 text-right text-sm font-[500]"
                                            >
                                                Transaction ID
                                            </th>

                                            <th className="px-4 py-3 text-right text-sm font-[500]"
                                            >
                                                Refund date
                                            </th>
                                            <th className="px-4 py-3 text-right text-sm font-[500]"
                                            >
                                                Order amount
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-200 bg-white text-sm">
                                        <tr className='hover:bg-gray-100'>
                                            <td className="whitespace-nowrap px-4 py-4 text-left text-[#146eb4]">
                                                #281209
                                            </td>
                                            <td className="whitespace-nowrap px-12 py-4 text-center">
                                                Successful
                                            </td>
                                            <td className="whitespace-nowrap px-4 py-4 text-right">
                                                131634495747
                                            </td>
                                            <td className="whitespace-nowrap px-4 py-4 text-right">
                                                Today, 08:45 PM
                                            </td>
                                            <td className="whitespace-nowrap px-4 py-4 text-right">
                                                ₹1,125.00
                                            </td>
                                        </tr>
                                        <tr className='hover:bg-gray-100'>
                                            <td className="whitespace-nowrap px-4 py-4 text-left text-[#146eb4]">
                                                #281209
                                            </td>
                                            <td className="whitespace-nowrap px-12 py-4 text-center">
                                                Processing
                                            </td>
                                            <td className="whitespace-nowrap px-4 py-4 text-right">
                                                131634495747
                                            </td>
                                            <td className="whitespace-nowrap px-4 py-4 text-right">
                                                Yesterday, 3:00 PM
                                            </td>
                                            <td className="whitespace-nowrap px-4 py-4 text-right">
                                                ₹1,125.00
                                            </td>
                                        </tr>
                                        <tr className='hover:bg-gray-100'>
                                            <td className="whitespace-nowrap px-4 py-4 text-left text-[#146eb4]">
                                                #281209
                                            </td>
                                            <td className="whitespace-nowrap px-12 py-4 text-center">
                                                Successful
                                            </td>
                                            <td className="whitespace-nowrap px-4 py-4 text-right">
                                                131634495747
                                            </td>
                                            <td className="whitespace-nowrap px-4 py-4 text-right">
                                                12 Jul 2023, 03:00 PM
                                            </td>
                                            <td className="whitespace-nowrap px-4 py-4 text-right">
                                                ₹1,125.00
                                            </td>
                                        </tr>

                                        <tr className='hover:bg-gray-100'>
                                            <td className="whitespace-nowrap px-4 py-4 text-left text-[#146eb4]">
                                                #281209
                                            </td>
                                            <td className="whitespace-nowrap px-12 py-4 text-center">
                                                Successful
                                            </td>
                                            <td className="whitespace-nowrap px-4 py-4 text-right">
                                                131634495747
                                            </td>
                                            <td className="whitespace-nowrap px-4 py-4 text-right">
                                                12 Jul 2023, 03:00 PM
                                            </td>
                                            <td className="whitespace-nowrap px-4 py-4 text-right">
                                                ₹1,125.00
                                            </td>
                                        </tr>
                                        <tr className='hover:bg-gray-100'>
                                            <td className="whitespace-nowrap px-4 py-4 text-left text-[#146eb4]">
                                                #281209
                                            </td>
                                            <td className="whitespace-nowrap px-12 py-4 text-center">
                                                Successful
                                            </td>
                                            <td className="whitespace-nowrap px-4 py-4 text-right">
                                                131634495747
                                            </td>
                                            <td className="whitespace-nowrap px-4 py-4 text-right">
                                                12 Jul 2023, 03:00 PM
                                            </td>
                                            <td className="whitespace-nowrap px-4 py-4 text-right">
                                                ₹1,125.00
                                            </td>
                                        </tr>
                                        <tr className='hover:bg-gray-100'>
                                            <td className="whitespace-nowrap px-4 py-4 text-left text-[#146eb4]">
                                                #281209
                                            </td>
                                            <td className="whitespace-nowrap px-12 py-4 text-center">
                                                Successful
                                            </td>
                                            <td className="whitespace-nowrap px-4 py-4 text-right">
                                                131634495747
                                            </td>
                                            <td className="whitespace-nowrap px-4 py-4 text-right">
                                                12 Jul 2023, 03:00 PM
                                            </td>
                                            <td className="whitespace-nowrap px-4 py-4 text-right">
                                                ₹1,125.00
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home;