import Image from "next/image";
import Link from "next/link";
import { FaEdit } from "react-icons/fa";

function ProfilePage() {
  const user = {
    name: "Saif",
    email: "abc@dss.com",
    image: "/tiles/008.jpg",
  };
  return (
    <>
      <div className="py-10 px-8 sm:px-20 sm:w-150 container bg-base-100 mx-auto my-10 rounded-2xl shadow-sm relative">
        <div className="flex items-center justify-center">
          <Image
            src={user.image}
            width={300}
            height={300}
            alt="Profile"
            className="rounded-full h-48 w-48 border-[#0E6F75] border-2"
          />
        </div>

        <p className="mt-10">
          <span className="font-semibold text-[#0E6F75] text-xl">Name : </span>{" "}
          <span className="font-normal text-xl text-teal-950">{user.name}</span>
        </p>
        <p className="py-3">
          <span className="font-semibold text-[#0E6F75] text-xl">Email : </span>{" "}
          <span className="font-normal text-xl text-teal-950">
            {user.email}
          </span>
        </p>

        <button className="btn btn-outline border-[#0E6F75] text-[#0E6F75] mt-10 absolute -top-6 right-3">
          <Link href={"/update"} className="flex gap-2">
            {" "}
            <FaEdit color="#0E6F75" size={18} /> Update-User
          </Link>{" "}
        </button>
      </div>
    </>
  );
}

export default ProfilePage;
