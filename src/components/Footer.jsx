import { FiHome, FiMessageCircle } from "react-icons/fi";
import { CiStar, CiUser } from "react-icons/ci";

const Footer = () => {
  return (
    <footer className="fixed bottom-0 left-0 w-full h-16 border-t border-gray-200 flex justify-around items-center">
      {/* Blur background */}
      <div className="absolute inset-0 bg-white/70 backdrop-blur-md"></div>

      {/* Icons */}
      <FiHome size={28} className="z-10 stroke-[#ACACAC]" />
      <CiStar size={28} className="z-10 stroke-[#ACACAC]" />
      <FiMessageCircle size={28} className="z-10 stroke-[#ACACAC]" />
      <CiUser size={28} className="z-10 stroke-[#ACACAC]" />
    </footer>
  );
};

export default Footer;
