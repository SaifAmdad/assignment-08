import React from "react";

function UpdatePage() {
  return (
    <>
      <div className="py-10 px-8 sm:px-20 sm:w-120 container bg-base-100 mx-auto my-10 rounded-2xl shadow-sm">
        <h2 className="font-bold text-center text-2xl mb-8">Update User</h2>
        <fieldset className="fieldset">
          <label className="label">Name</label>
          <input
            type="text"
            className="input w-full bg-transparent border border-[#D1D5DB]"
            placeholder="Name"
          />
          <label className="label">Image link</label>
          <input
            type="text"
            className="input w-full bg-transparent border border-[#D1D5DB]"
            placeholder="Photo-url"
          />

          <button className="btn text-white bg-[#0E6F75] mt-4">Update</button>
        </fieldset>
      </div>
    </>
  );
}

export default UpdatePage;
