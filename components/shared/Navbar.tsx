"use client";

import { AiOutlineShoppingCart } from "react-icons/ai";
import { BsPersonSlash } from "react-icons/bs";
import { CiHeart, CiSearch, CiShoppingCart } from "react-icons/ci";
import Image from "next/image";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { GoPersonAdd } from "react-icons/go";
import Link from "next/link";
import { usePathname } from "next/navigation";






export default function Navbar() {
  const pathname = usePathname();

const navList = () => {
  return (
    <>
      <li>
        <Link 
          href="/" 
          className={`hover:bg-transparent focus:bg-transparent active:bg-transparent hover:!text-current focus:!text-current active:!text-current pb-1 relative group ${
            pathname === '/' ? 'text-[#92690a]' : ''
          }`}
        >
          Home
          <span className={`absolute bottom-0 left-0 h-0.5 bg-[#B88E2F] transition-all duration-300 ${
            pathname === '/' ? 'w-full' : 'w-0 group-hover:w-full'
          }`}></span>
        </Link>
      </li>
      <li>
        <Link 
          href="/shop" 
          className={`hover:bg-transparent focus:bg-transparent active:bg-transparent hover:!text-current focus:!text-current active:!text-current pb-1 relative group ${
            pathname === '/shop' ? 'text-[#B88E2F]' : ''
          }`}
        >
          Shop
          <span className={`absolute bottom-0 left-0 h-0.5 bg-[#B88E2F] transition-all duration-300 ${
            pathname === '/shop' ? 'w-full' : 'w-0 group-hover:w-full'
          }`}></span>
        </Link>
      </li>
      <li>
        <Link 
          href="/about" 
          className={`hover:bg-transparent focus:bg-transparent active:bg-transparent hover:!text-current focus:!text-current active:!text-current pb-1 relative group ${
            pathname === '/about' ? 'text-[#B88E2F]' : ''
          }`}
        >
          About
          <span className={`absolute bottom-0 left-0 h-0.5 bg-[#B88E2F] transition-all duration-300 ${
            pathname === '/about' ? 'w-full' : 'w-0 group-hover:w-full'
          }`}></span>
        </Link>
      </li>
      <li>
        <Link 
          href="/contact" 
          className={`hover:bg-transparent focus:bg-transparent active:bg-transparent hover:!text-current focus:!text-current active:!text-current pb-1 relative group ${
            pathname === '/contact' ? 'text-[#B88E2F]' : ''
          }`}
        >
          Contact
          <span className={`absolute bottom-0 left-0 h-0.5 bg-[#B88E2F] transition-all duration-300 ${
            pathname === '/contact' ? 'w-full' : 'w-0 group-hover:w-full'
          }`}></span>
        </Link>
      </li>
    </>
  );
};




    return (
        <div className="sticky top-0 z-50 bg-white">
            <div className="navbar bg-base-100  py-4 w-14/15 mx-auto border-none ">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={1}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {navList()}

                    </ul>
                </div>
                <a className="text-xl"><Image src={"/images/navbar-logo.png"} alt="Logo" width={185} height={41}></Image></a>
            </div>
            <div className="navbar-center hidden lg:flex ">
                <ul className="menu menu-horizontal px-1 space-x-18">
                    {navList()}
                </ul>
            </div>
            <div className="navbar-end">
                <ul className="flex items-center justify-center  lg:space-x-12 space-x-4">
                    <li ><a><GoPersonAdd className="h-6 w-6 hover:text-[#B88E2F] cursor-pointer" /></a></li>
                    <li ><a><CiSearch className="h-6 w-6 hover:text-[#B88E2F] cursor-pointer" /></a></li>
                    <li ><a><CiHeart className="h-6 w-6 hover:text-[#B88E2F] cursor-pointer" /></a></li>
                    <li ><a><CiShoppingCart className="h-6 w-6 hover:text-[#B88E2F] cursor-pointer" /></a></li>
                </ul>
            </div>
        </div>
        </div>
    )
}