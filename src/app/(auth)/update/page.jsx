"use client";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import React from "react";
import { Bounce, toast, ToastContainer } from "react-toastify";

function UpdatePage() {
  const router = useRouter();
  const updateUser = async (e) => {
    e.preventDefault();

    const res = await authClient.updateUser({
      image: e.target.image.value,
      name: e.target.name.value,
    });
    if (!res?.error) {
      toast.success("User Updated Successfully !", {
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
      router.push("/profile");
    }
  };
  return (
    <>
      <div className="py-10 px-8 sm:px-20 sm:w-120 container bg-base-100 mx-auto my-10 rounded-2xl shadow-sm">
        <h2 className="font-bold text-center text-2xl mb-8">Update User</h2>
        <form onSubmit={updateUser} className="fieldset">
          <label className="label">Name</label>
          <input
            type="text"
            className="input w-full bg-transparent border border-[#D1D5DB]"
            placeholder="Name"
            name="name"
          />
          <label className="label">Image link</label>
          <input
            type="text"
            className="input w-full bg-transparent border border-[#D1D5DB]"
            placeholder="Photo-url"
            name="image"
          />

          <button className="btn text-white bg-[#0E6F75] mt-4" type="submit">
            Update
          </button>
        </form>
      </div>
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

export default UpdatePage;
