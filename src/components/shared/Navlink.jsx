"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

function Navlink({ path, href }) {
  const pathName = usePathname();

  return (
    <Link
      href={href}
      className={`text-[16px] ${pathName === href ? "text-[#1F6F5F] font-bold underline" : ""}`}
    >
      {path}
    </Link>
  );
}

export default Navlink;
