import Image from "next/image";
import Link from "next/link";
import Favorit from "./Favorit";

export default function ListerPet({ id, breedGroup, origin, image }) {
  return (
    <div className="relative bg-white rounded-lg shadow-sm overflow-hidden">
      <Favorit id={id} />

      <Link href={`/detail/${id}`}>
        <div className="flex flex-col cursor-pointer">
          <div className="w-full">{image && <Image src={image} alt={breedGroup} width={400} height={300} className="w-full h-40 object-cover rounded-b-lg" />}</div>

          <div className="px-3 pb-4 pt-2">
            <h2 className="font-bold text-lg">{breedGroup}</h2>
            <p className="text-gray-400 text-sm">{origin}</p>
          </div>
        </div>
      </Link>
    </div>
  );
}
