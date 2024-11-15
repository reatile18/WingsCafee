"use client";

import { useState } from "react";
import { BsFacebook, BsTwitter, BsYoutube } from "react-icons/bs";

export default function  Footer()  {

    const footerNavs = [
        {
            href: 'javascript:void()',
            name: 'Policy'
        },
        
        {
            href: 'javascript:void()',
            name: 'Company'
        },
        {
            href: 'javascript:void()',
            name: 'License'
        },
        {
            href: 'javascript:void()',
            name: 'About Us'
        },
    ]


    const [isDialogOpen, setIsDialogOpen] = useState(false);

    const openDialog = () => setIsDialogOpen(true);
    const closeDialog = () => setIsDialogOpen(false);

    return (

        <footer className="text-black-500 bg-white px-4 py-5">
            <div className="max-w-screen-xl mx-auto text-center">
                <img src="/logo.png" className="w-20 h-20 mx-auto" alt="Logo" height={50} width={50} />
                <p className="leading-relaxed mt-2 text-sm">
                    Lorem Ipsum has been the industry standard dummy text.
                </p>
            </div>
            <div>
                <div className="mt-4 text-center">
                    <button
                        onClick={openDialog}
                        className="py-3 px-4 font-medium text-sm text-center text-white bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 active:shadow-none rounded-lg shadow"
                    >
                        Contact us
                    </button>
                </div>

                {isDialogOpen && (
                    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg w-full max-w-lg">
                        <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Contact Us</h4>
                        <form
                        onSubmit={(e) => e.preventDefault()}
                        className="space-y-5"
                        >
                        <div className="flex flex-col items-center gap-y-5 gap-x-6 [&>*]:w-full sm:flex-row">
                            <div>
                            <label className="font-medium text-gray-900 dark:text-gray-200">First name</label>
                            <input
                                type="text"
                                required
                                className="w-full mt-2 px-3 py-2 text-gray-900 dark:text-gray-300 bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 focus:border-indigo-600 dark:focus:border-indigo-400 outline-none shadow-sm rounded-lg"
                            />
                            </div>
                            <div>
                            <label className="font-medium text-gray-900 dark:text-gray-200">Last name</label>
                            <input
                                type="text"
                                required
                                className="w-full mt-2 px-3 py-2 text-gray-900 dark:text-gray-300 bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 focus:border-indigo-600 dark:focus:border-indigo-400 outline-none shadow-sm rounded-lg"
                            />
                            </div>
                        </div>
                        <div>
                            <label className="font-medium text-gray-900 dark:text-gray-200">Email</label>
                            <input
                            type="email"
                            required
                            className="w-full mt-2 px-3 py-2 text-gray-900 dark:text-gray-300 bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 focus:border-indigo-600 dark:focus:border-indigo-400 outline-none shadow-sm rounded-lg"
                            />
                        </div>
                        <div>
                            <label className="font-medium text-gray-900 dark:text-gray-200">Phone number</label>
                            <div className="relative mt-2">
                            <div className="absolute inset-y-0 left-3 my-auto h-6 flex items-center border-r border-gray-300 dark:border-gray-600 pr-2">
                                <select className="text-sm bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-300 outline-none rounded-lg h-full">
                                <option>LS</option>
                                <option>SA</option>
                                <option>US</option>
                                </select>
                            </div>
                            <input
                                type="number"
                                placeholder="+266 5321 3789"
                                required
                                className="w-full pl-[4.5rem] pr-3 py-2 text-gray-900 dark:text-gray-300 bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 focus:border-indigo-600 dark:focus:border-indigo-400 outline-none shadow-sm rounded-lg"
                            />
                            </div>
                        </div>
                        <div>
                            <label className="font-medium text-gray-900 dark:text-gray-200">Message</label>
                            <textarea required className="w-full mt-2 h-36 px-3 py-2 text-gray-900 dark:text-gray-300 bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 focus:border-indigo-600 dark:focus:border-indigo-400 outline-none resize-none shadow-sm rounded-lg"></textarea>
                        </div>
                        
                        <div className="flex flex-col items-center gap-y-5 gap-x-6 [&>*]:w-full sm:flex-row">
                            <button
                            onClick={closeDialog}
                            className="mt-4 px-4 py-2 bg-red-600 text-white rounded-lg"
                            >
                            Cancel
                            </button>
                            <button
                            type="submit"
                            className="mt-4 px-4 py-2 text-white font-medium bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-600 rounded-lg duration-150"
                            >
                            Submit
                            </button>
                        </div>
                        </form>
                    </div>
                    </div>
                )}
            
                <ul className="mt-8 flex flex-col items-center justify-center space-y-5 sm:flex-row sm:space-x-4 sm:space-y-0">
                    {footerNavs.map((item, idx) => (
                        <li key={idx} className="hover:text-gray-800">
                            <a href={item.href}>{item.name}</a>
                        </li>
                    ))}
                </ul>
                 
                <div className="mt-8 flex flex-col items-center sm:flex-row sm:justify-between">
                    <div className="text-center sm:text-left">
                        &copy; 2024 Wings Cafe rights reserved.
                    </div>
                    <div className="mt-6 flex items-center space-x-4">
                        <ul className="flex items-center space-x-4">
                            <li className="w-10 h-10 border rounded-full flex items-center justify-center">
                                <a href="https://www.facebook.com/profile.php?id=61554715555087">
                                    <BsFacebook/>
                                </a>
                            </li>

                            <li className="w-10 h-10 border rounded-full flex items-center justify-center">
                                <a href="https://www.youtube.com/@Sebabatso_lesotho">
                                    <BsTwitter/>
                                </a>
                            </li>

                            <li className="w-10 h-10 border rounded-full flex items-center justify-center">
                                <a href="https://www.youtube.com/@Sebabatso_lesotho">
                                <BsYoutube />
                                </a>
                            </li>
                            </ul>
                    </div>
                </div>
            </div>
        </footer>
    );

}
