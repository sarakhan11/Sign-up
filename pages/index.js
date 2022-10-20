import { useEffect, useState } from 'react'
import Image from "next/image";
import Link from "next/link";
import React from 'react';const Index = () => {


    return (
      <>


      <div className="w-full bg-[#075985] h-[700px]">
        <div className="flex flex-col xl:flex-row lg:flex-row md:flex-col sm:flex-col ">
          <div className="flex justify-center items-center ml-12 gap-3">
            <div className="">
            <Image className="cursor-pointer" src="/logo.svg" width={26} height={26} alt=""/>
            </div>
            <div className="">
            <Image className="cursor-pointer" src="/Starkienstein.svg" width={244} height={24} alt=""/>
            </div>
          </div>
          <div className="xl:ml-auto lg:ml-auto md:ml-auto sm:ml-0 ml-0 bg-white w-7/12  rounded-l-[38px] h-[700px]">
            <div className="relative w-[96px] pb-28 ml-auto mr-8">
                <select aria-label="select a city" type="text" name="city" required="" id="City" className="bg-white appearance-none text-sm -z-10 pl-3 py-2 text-gray-600 pr-2 pb-4 pr-8 text-black-primary invalid:text-gray-600 rounded focus:outline-none">
                  <option value="" disabled="" selected="">English (UK)</option>
                  <option value="Urdu">Urdu</option>
                  <option value="">Italian</option>
                  <option value="Italian">Italian</option>
                </select>
                <div className="z-30 cursor-pointer absolute top-1 -right-3">
                  <Image className="cursor-pointer" src="/Polygon 1.svg" width={17} height={12} alt=""/>
                </div>
              </div>
              <div className="pl-48 w-[804px]">
                <p className="text-2xl text-black font-semibold">
                  Sign in
                </p>
                <div className="pt-11 pb-8 flex flex-col xl:flex-row lg:flex-row md:flex-col sm:flex-col space-x-6">
                  <button className="py-3 pl-3 pr-10 border-gary-200 flex items-center my-auto border rounded-lg">
                  <Image className="cursor-pointer" src="/search 1.svg" width={25} height={25} alt=""/>
                    <p className="text-gray-600 text-sm pl-3.5">
                      Sign up with Google
                    </p>
                  </button>
                  <button className="py-3 pl-3 pr-8 border-gary-200 flex items-center my-auto border rounded-lg">
                  <Image className="cursor-pointer" src="/facebook 1.svg" width={25} height={25} alt=""/>
                    <p className="text-gray-600 text-sm pl-3.5">
                      Sign up with Facebook
                    </p>
                  </button>
                </div>
                <p className="text-lg text-gray-800 text-center pb-8">
                  - OR -
                </p>
                <div className="flex flex-col gap-y-10 pb-12">
                  <input placeholder="Email Address" className="border-b border-gray-200 pb-2 placeholder-gray-600 text-sm focus:outline-none w-full"/>
                  <input placeholder="Password"className="border-b border-gray-200 pb-2 placeholder-gray-600 text-sm focus:outline-none w-full"/></div>
                  <Link href='/dashbord'>
                    <button className="w-full bg-[#075985] pt-2 pb-2.5 text-white font-semibold hover:bg-sky-700 transition duration-300 rounded-lg mb-3">
                      Login
                    </button>
                  </Link>
                  <div className="cursor-pointer flex space-x-0.5">
                    <p className="text-gray-500 text-sm">
                      Already have an account?
                    </p>
                    <p className="text-sm text-sky-800">
                      Log in
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
      
 
    </>

    );
  };
  
  export default Index;