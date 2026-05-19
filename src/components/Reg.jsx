"use client";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import React from "react";
import { Bounce, toast, ToastContainer } from "react-toastify";
import SigninGoogle from "./shared/SigninGoogle";

function Reg() {
  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const image = e.target.image.value;
    const password = e.target.password.value;
    const user = {
      name,
      email,
      password,
      image,
    };
    console.log({ user });
    regi({ user });
  };
  const regi = async ({ user }) => {
    const { data, error } = await authClient.signUp.email({
      name: user.name,
      email: user.email,
      password: user.password,
      image: user.image,
      callbackURL: "/",
    });
    if (error) {
      toast.error(error.message, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    } else {
      toast.success("Registered Successfully !", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    }
  };

  return (
    <>
      <div className="py-10 px-8 sm:px-20 sm:w-120 container bg-base-100 mx-auto my-10 rounded-2xl shadow-sm">
        <h2 className="font-bold text-center text-2xl mb-8">Register Now</h2>
        <form className="fieldset" onSubmit={handleRegister}>
          <label className="label">Full Name</label>
          <input
            type="text"
            className="input w-full bg-transparent border border-[#D1D5DB]"
            placeholder="Name"
            name="name"
          />
          <label className="label">Email</label>
          <input
            type="email"
            className="input w-full bg-transparent border border-[#D1D5DB]"
            placeholder="Email"
            name="email"
          />
          <label className="label">Photo-Url</label>
          <input
            type="text"
            className="input w-full bg-transparent border border-[#D1D5DB]"
            placeholder="Photo url..."
            name="image"
          />
          <label className="label">Password</label>
          <input
            type="password"
            className="input w-full bg-transparent border border-[#D1D5DB]"
            placeholder="Password"
            name="password"
          />

          <button className="btn text-white bg-[#0E6F75] mt-4" type="submit">
            Register
          </button>
        </form>
        <SigninGoogle />
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

export default Reg;
