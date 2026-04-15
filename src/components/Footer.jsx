"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiHome, FiMessageCircle } from "react-icons/fi";
import { CiStar, CiUser } from "react-icons/ci";

const Footer = () => {
  const pathname = usePathname();

  return (
    <footer className="fixed bottom-0 left-0 w-full h-16 border-t border-gray-200 flex justify-around items-center rounded-tl-3xl rounded-tr-3xl bg-gray-100/70 backdrop-blur-md">
      {/* HOME */}
      <Link href="/">
        <FiHome size={28} className={pathname === "/" ? "stroke-red-400" : "stroke-[#ACACAC]"} />
      </Link>

      {/* DETAIL */}
      {/* <Link href={`/detail/${id}`}>
        <CiStar size={28} className={pathname === "/detail" ? "stroke-red-400" : "stroke-[#ACACAC]"} />

      </Link> */}

      <CiStar size={28} className={pathname.startsWith("/detail") ? "stroke-red-400" : "stroke-[#ACACAC]"} />

      {/* MESSAGES (ikke aktiv endnu) */}
      <FiMessageCircle size={28} className="stroke-[#ACACAC]" />

      {/* PROFILE (ikke aktiv endnu) */}
      <CiUser size={28} className="stroke-[#ACACAC]" />
    </footer>
  );
};

export default Footer;
