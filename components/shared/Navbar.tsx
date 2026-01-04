import { AiOutlineShoppingCart } from "react-icons/ai";
import { BsPersonSlash } from "react-icons/bs";
import { CiHeart, CiSearch } from "react-icons/ci";


export default function Navbar() {
  return (
    <div className="navbar bg-base-100  py-4 w-13/15 mx-auto border-none">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={1}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li><a>Home</a></li>
        <li><a>Shop</a></li>
        <li><a>About</a></li>
        <li><a>Contact</a></li>
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">daisyUI</a>
  </div>
  <div className="navbar-center hidden lg:flex ">
    <ul className="menu menu-horizontal px-1 space-x-15">
        <li><a>Home</a></li>
        <li><a>Shop</a></li>
        <li><a>About</a></li>
        <li><a>Contact</a></li>
    </ul>
  </div>
  <div className="navbar-end">
        <ul className="flex items-center space-x-10">
        <li ><a><BsPersonSlash className="h-6 w-6"/></a></li>
        <li ><a><CiSearch className="h-6 w-6"/></a></li>
        <li ><a><CiHeart className="h-6 w-6"/></a></li>
        <li ><a><AiOutlineShoppingCart className="h-6 w-6   "/></a></li>
    </ul>
  </div>
</div>
  )
}
