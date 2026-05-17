import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoLinkedin } from "react-icons/io";

function Footer() {
  return (
    <div className="bg-[#E1F1F2] py-5">
      <div className="flex flex-col sm:flex-row gap-5 container mx-auto">
        <div className="card w-full sm:w-[60%] border-none shadow-none ">
          <div className="card-body">
            <h6 className="footer-title">Contact Us</h6>
            <fieldset className="fieldset">
              <label className="label">Email</label>
              <input
                type="email"
                className="input w-full bg-transparent border border-[#D1D5DB]"
                placeholder="Email"
              />
              <label className="label">Password</label>
              <input
                type="password"
                className="input w-full bg-transparent border border-[#D1D5DB]"
                placeholder="Password"
              />
              <button className="btn bg-[#0E6F75] mt-4">Login</button>
            </fieldset>
          </div>
        </div>
        <div className="card w-full sm:w-[40%] border-none shadow-none">
          <div className="card-body">
            <h6 className="footer-title text-center sm:text-left">Social</h6>
            <div className="flex items-center justify-center gap-5">
              <FaFacebook size={35} fill="#0E6F75" />
              <FaXTwitter size={35} fill="#0E6F75" />
              <IoLogoLinkedin size={35} fill="#0E6F75" />
            </div>
          </div>
        </div>
        <hr className="bg-[#D1D5DB] border border-[#D1D5DB]" />
      </div>
    </div>
  );
}

export default Footer;
