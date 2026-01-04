import { AiOutlineShoppingCart } from "react-icons/ai";
import { BsPersonSlash } from "react-icons/bs";
import { CiHeart, CiSearch, CiShoppingCart } from "react-icons/ci";
import Image from "next/image";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { GoPersonAdd } from "react-icons/go";
import Link from "next/link";






export default function Navbar() {

const navList = () => {
  return (
    <>
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/shop">Shop</Link>
      </li>
      <li>
        <Link href="/about">About</Link>
      </li>
      <li>
        <Link href="/contact">Contact</Link>
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
                    <li ><a><GoPersonAdd className="h-6 w-6" /></a></li>
                    <li ><a><CiSearch className="h-6 w-6" /></a></li>
                    <li ><a><CiHeart className="h-6 w-6" /></a></li>
                    <li ><a><CiShoppingCart className="h-6 w-6" /></a></li>
                </ul>
            </div>
        </div>
        </div>
    )
}
