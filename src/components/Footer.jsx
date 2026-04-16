"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiHome, FiMessageCircle } from "react-icons/fi";
import { CiStar, CiUser } from "react-icons/ci";
import { Suspense } from "react";

function FooterContent() {
  const pathname = usePathname();

  return (
    <footer className="fixed bottom-0 left-0 w-full h-16 border-t border-gray-200 flex justify-around items-center rounded-tl-3xl rounded-tr-3xl bg-gray-100/70 backdrop-blur-md">
      <Link href="/">
        <FiHome size={28} className={pathname === "/" ? "text-red-400" : "text-[#ACACAC]"} />
      </Link>

      <CiStar size={28} className="text-[#ACACAC]" />
      <FiMessageCircle size={28} className="text-[#ACACAC]" />
      <CiUser size={28} className="text-[#ACACAC]" />
    </footer>
  );
}

export default function Footer() {
  return (
    <Suspense fallback={null}>
      <FooterContent />
    </Suspense>
  );
}
