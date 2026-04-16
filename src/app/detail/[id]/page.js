import Link from "next/link";
import Button from "@/components/Button";
import Favorit from "@/components/Favorit";
import { IoIosArrowBack } from "react-icons/io";
import { Suspense } from "react";

async function DetailContent({ id }) {
  const res = await fetch("https://api.thedogapi.com/v1/breeds", {
    headers: {
      "x-api-key": process.env.DOG_API_KEY,
    },
    cache: "no-store",
  });

  const breeds = await res.json();

  const dog = breeds.find((b) => b.id == id);

  if (!dog) return <div>Hund ikke fundet </div>;

  const temperament = dog.temperament?.split(", ") || [];

  return (
    <div className="p-4">
      <div className="relative">
        <img src={dog.image?.url} className="w-full h-[400px] object-cover rounded-3xl" />

        <Link href="/" className="absolute top-4 left-4 bg-white rounded-full p-2">
          <IoIosArrowBack size={20} />
        </Link>

        <Favorit id={id} />

        <div className="absolute bottom-4 left-4 bg-white/70 px-3 py-1 rounded-xl flex items-center gap-2">
          <img src={dog.image?.url} className="w-8 h-8 rounded-md" />
          <span>{dog.name}</span>
        </div>
      </div>

      <h1 className="text-3xl font-bold mt-4">{dog.name}</h1>

      <Button temperament={temperament} />

      <p className="mt-4 text-gray-600">{dog.description}</p>
    </div>
  );
}

export default async function DetailPage({ params }) {
  return (
    <Suspense fallback={<div className="p-4">Indlæser...</div>}>
      <DetailPageContent params={params} />
    </Suspense>
  );
}

async function DetailPageContent({ params }) {
  const { id } = await params;

  return <DetailContent id={id} />;
}
