import { authClient } from "@/lib/auth-client";
import React from "react";
import { AiFillGoogleCircle } from "react-icons/ai";
import { Bounce, toast, ToastContainer } from "react-toastify";

function SigninGoogle() {
  const googleSignUp = async () => {
    const data = await authClient.signIn.social({
      provider: "google",
    });
    toast.success("SignIn Successfully !", {
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
  };
  return (
    <>
      <button
        className="btn btn-outline border-[#0E6F75] text-[#0E6F75] mt-4 w-full"
        onClick={googleSignUp}
      >
        <AiFillGoogleCircle color="#0E6F75" size={20} /> Sign in with Google
      </button>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
    </>
  );
}

export default SigninGoogle;
