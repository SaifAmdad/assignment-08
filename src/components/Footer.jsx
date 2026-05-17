import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoLinkedin } from "react-icons/io";

function Footer() {
  return (
    <footer className="bg-[#E1F1F2] py-5">
      <div className="flex flex-col gap-1 sm:flex-row sm:gap-5 container mx-auto">
        <div className="card w-full sm:w-[60%] border-none shadow-none ">
          <div className="card-body">
            <h6 className="footer-title">Contact Us</h6>
            <fieldset className="fieldset">
              <label className="label">Name</label>
              <input
                type="text"
                className="input w-full bg-transparent border border-[#D1D5DB]"
                placeholder="Your Name"
              />
              <label className="label">Email</label>
              <input
                type="email"
                className="input w-full bg-transparent border border-[#D1D5DB]"
                placeholder="Email"
              />
              <label className="label">Message</label>
              <textarea
                type="text"
                spellCheck
                rows={5}
                className="input w-full bg-transparent border border-[#D1D5DB]"
                placeholder="Message"
              />
              <button className="btn text-white bg-[#0E6F75] mt-4">
                Send Message
              </button>
            </fieldset>
          </div>
        </div>
        <div className="card w-full sm:w-[40%] border-none shadow-none">
          <div className="card-body">
            <h6 className="footer-title text-center sm:text-left">Social</h6>

            <div className="flex justify-center sm:flex-col sm:justify-start gap-5 pt-4">
              <div className="flex flex-col sm:flex-row items-center justify-start gap-1 sm:gap-2">
                <FaFacebook size={35} fill="#0E6F75" />{" "}
                <span className="text-[#0E6F75] text-center">Facebook</span>
              </div>
              <div className="flex flex-col sm:flex-row items-center justify-start gap-1 sm:gap-2">
                <FaXTwitter size={35} fill="#0E6F75" />
                <span className="text-[#0E6F75] text-center">Twitter</span>
              </div>
              <div className="flex flex-col sm:flex-row items-center justify-start gap-1 sm:gap-2">
                <IoLogoLinkedin size={35} fill="#0E6F75" />
                <span className="text-[#0E6F75] text-center">Linked in</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className="bg-[#D1D5DB] border border-[#D1D5DB]" />
      <p className="text-center py-4 text-[#555555]">
        Copyright &copy; 2026 reserved TileGallery
      </p>
    </footer>
  );
}

export default Footer;
