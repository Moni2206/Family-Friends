import SearchBar from "../components/SearchBar";
import Card from "../components/Card";
import Image from "next/image";
import { FaRegStar } from "react-icons/fa";
import { IoIosArrowBack } from "react-icons/io";
import Description from "../components/Description";
import History from "../components/History";
import BreedList from "@/components/Breedlist";

export default function Home() {
  return (
    <main className="">
      <section className="flex justify-center flex-col">
        <section className="self-center">
          <div className="relative w-85 h-90">
            <IoIosArrowBack size={35} className="m-4 absolute top-2 left-2 bg-white p-1 rounded-full z-10"></IoIosArrowBack>

            <FaRegStar size={35} color="white" className="m-4 absolute top-2 right-2 bg-white/25 rounded-full p-1 z-10"></FaRegStar>

            <div className="flex gap-4 rounded-2xl absolute bottom-10 left-4 px-3 py-2 bg-white/35">
              <Image src={imgsrc} width={40} height={40} className="aspect-square object-cover rounded-lg"></Image>
              <h3 className="text-white">Breed</h3>
            </div>

            <Image src="https://placecats.com/neo/300/200" alt="Cat cutie" width={340} height={360} className="object-cover rounded-2xl aspect-square"></Image>
          </div>
        </section>
        <div className="self-center m-4 w-85">
          <h2 className="text-[28px] font-bold">Breed</h2>
          <div className="bg-[#ACD7FF] max-w-fit p-1 rounded-full">
            <h3 className="m-2 text-[#6B8B42] text-[13px]">Karakteristik</h3>
          </div>
          <Description></Description>
          <History></History>
        </div>
      </section>
    </main>
  );
}
