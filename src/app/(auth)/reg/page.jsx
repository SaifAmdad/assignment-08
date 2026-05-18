import Link from "next/link";
import React from "react";
import { AiFillGoogleCircle } from "react-icons/ai";

function RegPage() {
  return (
    <>
      <div className="py-10 px-8 sm:px-20 sm:w-120 container bg-base-100 mx-auto my-10 rounded-2xl shadow-sm">
        <h2 className="font-bold text-center text-2xl mb-8">Register Now</h2>
        <fieldset className="fieldset">
          <label className="label">Full Name</label>
          <input
            type="text"
            className="input w-full bg-transparent border border-[#D1D5DB]"
            placeholder="Name"
          />
          <label className="label">Email</label>
          <input
            type="email"
            className="input w-full bg-transparent border border-[#D1D5DB]"
            placeholder="Email"
          />
          <label className="label">Photo-Url</label>
          <input
            type="text"
            className="input w-full bg-transparent border border-[#D1D5DB]"
            placeholder="Photo url..."
          />
          <label className="label">Password</label>
          <input
            type="password"
            className="input w-full bg-transparent border border-[#D1D5DB]"
            placeholder="Password"
          />

          <button className="btn text-white bg-[#0E6F75] mt-4">Register</button>
          <button className="btn btn-outline border-[#0E6F75] text-[#0E6F75] mt-4">
            <AiFillGoogleCircle color="#0E6F75" size={20} /> Sign up with Google
          </button>
        </fieldset>
        <p className="py-3 px-2 text-[#0E6F75] font-medium">
          Already Registered ?{" "}
          <Link href={"/login"} className="font-semibold underline">
            Login
          </Link>
        </p>
      </div>
    </>
  );
}

export default RegPage;
