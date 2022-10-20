import { useEffect, useState } from 'react'
import Image from "next/image";
import Link from "next/link";
import React from 'react';const Dashboard = () => {
    const [showMenu, setShowMenu] = useState(false);


    return (
      <>
        <div className='overflow-x-hidden h-[70px] w-full bg-[#FFFFFF]'>
            <div className='container '>
                <div className=" justify-center mx-auto ">
                    <div className="">
                    <div className="flex items-center">
                        <button
                    className=" block xl:hidden text-gray pt-10 px-6"
                    onClick={() => setShowMenu(!showMenu)}
                    >
                    <svg
                            fill="#000000"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 30 30"
                            width="30px"
                            height="30px"
                        >
                            <path d="M 3 7 A 1.0001 1.0001 0 1 0 3 9 L 27 9 A 1.0001 1.0001 0 1 0 27 7 L 3 7 z M 3 14 A 1.0001 1.0001 0 1 0 3 16 L 27 16 A 1.0001 1.0001 0 1 0 27 14 L 3 14 z M 3 21 A 1.0001 1.0001 0 1 0 3 23 L 27 23 A 1.0001 1.0001 0 1 0 27 21 L 3 21 z" />
                        </svg>
                    </button>

                
                    <div className="xl:flex hidden pl-20 mx-auto justify-between items-center my-auto z-30 pt-9 pb-16 w-[90%] container">
                        <div className="flex gap-x-10 items-center my-auto ">
                            <Image className="cursor-pointer" src="/Logo.svg" width={34} height={32} alt=""/>
                            <Image className="cursor-pointer" src="/Starkienstein (1).svg" width={143} height={14} alt=""/>
                        </div>

                        <div className="flex items-center my-auto gap-x-8 -mr-36 ">
                            <Image className="cursor-pointer" src="/Notifications-sharp.png" width={18} height={18} alt=""/>
                            <Image className="cursor-pointer" src="/Chatbubbles-sharp.svg" width={18} height={18} alt=""/>
                            <Image className="cursor-pointer" src="/Profile.svg" width={30} height={30} alt=""/>
                        </div>
                    </div>

                        <nav
                    className={showMenu
                        ? "absolute top-0 xl:hidden w-full h-full transform -translate-x-0 z-40 transition duration-700"
                        : "absolute top-0 xl:hidden w-full h-full transform -translate-x-full z-40 transition duration-700"} id="mobile-nav">
                        <div className=" items-right justify-center flex absolute right-8 p-4 -top-0  text-white z-40 cursor-pointer">
                        <Image
                            src="/icons8-multiply-50.png"
                            width={40}
                            height={40}
                            alt=""
                            onClick={() => setShowMenu(!showMenu)}
                            />
                        </div>
                        
                        <div className="xl:flex xl:hidden block  pl-20 mx-auto justify-between items-center my-auto z-30 pt-9 pb-16 w-[90%] container">
                        <div className="flex gap-x-10 items-center my-auto ">
                            <Image className="cursor-pointer" src="/Logo.svg" width={34} height={32} alt=""/>
                            <Image className="cursor-pointer" src="/Starkienstein (1).svg" width={143} height={14} alt=""/>
                        </div>

                        <div className="flex items-center my-auto gap-x-8 -mr-36 ">
                            <Image className="cursor-pointer" src="/Notifications-sharp.png" width={18} height={18} alt=""/>
                            <Image className="cursor-pointer" src="/Chatbubbles-sharp.svg" width={18} height={18} alt=""/>
                            <Image className="cursor-pointer" src="/Profile.svg" width={30} height={30} alt=""/>
                        </div>
                    </div>

                    </nav>
                    </div>
                </div>
                </div>
            </div>
            </div>

            <div className='container w-5/12'>

                <ul id="sidebar_menu" className="metismenu">
                    <li className="">
                        <a className="has-arrow flex" href="#" aria-expanded="false">
                            <div className="icon_menu">
                                <image className='cursor-pointer' src="/Home-sharp.svg" width={24} height={24} alt=""/>
                            </div>
                            <p>Dashboard</p>
                        </a>
                    </li>
                    <li className="">
                        <a className="has-arrow flex" href="#" aria-expanded="false">
                            <div className="icon_menu">
                                <image className='cursor-pointer' src="/Home-sharp.svg" height={24} width={24} alt=""/>
                            </div>
                            <p>Apps</p>
                        </a>
                    </li>
                    <li className="">
                        <a className="has-arrow flex" href="#" aria-expanded="false">
                            <div className="icon_menu">
                                <image className='cursor-pointer' src="/Home-sharp.svg" height={24} width={24} alt=""/>
                            </div>
                            <p>UI Kits</p>
                        </a>
                    </li>
                    <li className="">
                        <a className="has-arrow flex" href="#" aria-expanded="false">
                            <div className="icon_menu">
                                <image className='cursor-pointer' src="/Home-sharp.svg" height={24} width={24} alt=""/>
                            </div>
                            <p>forms</p>
                        </a>
                    </li>
                    <li className="">
                        <a href="Board.html flex" aria-expanded="false">
                            <div className="icon_menu ">
                                <image className='cursor-pointer' src="/Home-sharp.svg" height={24} width={24} alt=""/>
                            </div>
                            <p>Board</p>
                        </a>
                    </li>
                </ul>

            </div>
                

      </>

    );
  };

export default Dashboard;
