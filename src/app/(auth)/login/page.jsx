"use client";
import SigninGoogle from "@/components/shared/SigninGoogle";
import { authClient } from "@/lib/auth-client";
import { router } from "better-auth/api";
import Link from "next/link";
import React from "react";
import { AiFillGoogleCircle } from "react-icons/ai";
import { Bounce, toast, ToastContainer } from "react-toastify";

function LoginPage() {
  const handleLogin = (e) => {
    e.preventDefault();

    const email = e.target.email.value;

    const password = e.target.password.value;
    const user = {
      email,
      password,
    };
    regi(user);
  };
  const regi = async (user) => {
    const { data, error } = await authClient.signIn.email({
      email: user.email,
      password: user.password,
      rememberMe: true,
      callbackURL: "/",
    });
    console.log(data, error);
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
      toast.success("Loged in Successfully !", {
        position: "top-center",
        autoClose: 2000,
        onClose: () => router.push("/"),
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
        <h2 className="font-bold text-center text-2xl mb-8">Login Now</h2>
        <form onSubmit={handleLogin} className="fieldset">
          <label className="label">Email</label>
          <input
            type="email"
            className="input w-full bg-transparent border border-[#D1D5DB]"
            placeholder="Email"
            name="email"
          />
          <label className="label">Password</label>
          <input
            type="password"
            className="input w-full bg-transparent border border-[#D1D5DB]"
            placeholder="Password"
            name="password"
          />

          <button className="btn text-white bg-[#0E6F75] mt-4" type="submit">
            Login
          </button>
        </form>
        <SigninGoogle />
        <p className="py-3 px-2 text-[#0E6F75] font-medium">
          Not Registered ?{" "}
          <Link href={"/reg"} className="font-semibold underline">
            Register
          </Link>
        </p>
      </div>
    </>
  );
}

export default LoginPage;
