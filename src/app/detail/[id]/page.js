export const dynamic = "force-dynamic";

import Link from "next/link";
import Button from "@/components/Button";
import Favorit from "@/components/Favorit";
import { IoIosArrowBack } from "react-icons/io";

export default async function DetailPage({ params }) {
  const { id } = params;

  const res = await fetch("https://api.thedogapi.com/v1/breeds", {
    headers: {
      "x-api-key": process.env.DOG_API_KEY,
    },
    cache: "no-store",
  });

  const breeds = await res.json();

  if (!Array.isArray(breeds)) {
    return <div>API fejl 😢</div>;
  }

  const dog = breeds.find((b) => b.id == id);

  if (!dog) return <div>Hund ikke fundet 🐶</div>;

  const temperament = dog.temperament?.split(", ") || [];

  return (
    <div className="p-4">
      {/* IMAGE */}
      <div className="relative">
        <img src={dog.image?.url} alt={dog.name} className="w-full h-[400px] object-cover rounded-3xl" />

        {/* BACK BUTTON */}
        <Link href="/" className="absolute top-4 left-4 bg-white rounded-full p-2">
          <IoIosArrowBack size={20} className="text-gray-600 pr-px" />
        </Link>

        {/* FAVORITE */}
        <Favorit id={id} />

        {/* NAME OVER IMAGE */}
        <div className="absolute bottom-4 left-4 bg-white/70 px-3 py-1 rounded-xl flex items-center gap-2">
          <img src={dog.image?.url} className="w-8 h-8 rounded-md object-cover" />
          <span>{dog.name}</span>
        </div>
      </div>

      {/* TITLE */}
      <h1 className="text-3xl font-bold mt-4">{dog.name}</h1>

      {/* TAGS */}
      <Button temperament={temperament} />

      {/* DESCRIPTION */}
      <div className="mt-4">
        <h3 className="text-gray-400 text-sm">Breed description</h3>
        <p className="text-gray-600 mt-1">{dog.description}</p>
      </div>
    </div>
  );
}
