import Link from "next/link";
import React from "react";

function Navbar() {
  const navlinks = (
    <>
      <li>
        <Link href={"/"}>Home</Link>
      </li>
      <li>
        <Link href={"/all-tiles"}>All Tiles</Link>
      </li>
      <li>
        <Link href={"/profile"}>My Profile</Link>
      </li>
    </>
  );
  return (
    <div className=" bg-base-100 shadow-sm">
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
            className="text-2xl font-extrabold bg-linear-to-r from-blue-900 via-slate-300 to-white bg-clip-text text-transparent"
          >
            Tiles Gallery
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navlinks}</ul>
        </div>
        <div className="navbar-end">
          <Link href={"/login"}>Login</Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
