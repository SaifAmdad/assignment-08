import Link from "next/link";
import React from "react";
import Navlink from "./shared/Navlink";

function Navbar() {
  const navlinks = (
    <>
      <li>
        <Navlink href={"/"} path={"Home"}></Navlink>
      </li>
      <li>
        <Navlink href={"/all-tiles"} path={"All Tiles"}></Navlink>
      </li>
      <li>
        <Navlink href={"/profile"} path={"My Profile"}></Navlink>
      </li>
    </>
  );
  return (
    <div className="bg-base-100 shadow-sm">
      <div className="container mx-auto navbar">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {navlinks}
            </ul>
          </div>
          <Link
            href={"/"}
            className="text-2xl font-extrabold bg-linear-to-r from-blue-900 via-[#2FA084] to-[#1F6F5F] bg-clip-text text-transparent"
          >
            Tiles Gallery
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navlinks}</ul>
        </div>
        <div className="navbar-end">
          <Link
            href={"/login"}
            className="btn border-teal-800 text-[#0E6F75] px-7 hover:bg-[#0E6F75] hover:text-[#ffff] "
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
