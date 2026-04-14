import Image from "next/image";
import Link from "next/link";
import { CiStar } from "react-icons/ci";

export default function ListerPet({ id, breedGroup, origin, image }) {
  return (
    <Link href={`/detail/${id}`}>
      <div className="bg-white rounded-lg shadow-sm flex flex-col overflow-hidden cursor-pointer">
        <div className="relative w-full">
          {image && <Image src={image} alt={breedGroup} width={400} height={300} className="w-full h-48 object-cover" />}

          <CiStar size={30} className="absolute top-3 right-3 text-white bg-white/40 rounded-full p-1" />
        </div>

        <div className="px-3 pb-4 pt-2">
          <h2 className="font-bold text-lg">{breedGroup}</h2>
          <p className="text-gray-400 text-sm">{origin}</p>
        </div>
      </div>
    </Link>
  );
}

// import Image from "next/image";
// import { CiStar } from "react-icons/ci";

// const ListerPet = ({ breedGroup, origin, image }) => {
//   return (
//     <div className="bg-white rounded-lg shadow-sm flex flex-col overflow-hidden">
//       <div className="relative w-full">
//         {image && <Image src={image} alt={breedGroup} width={400} height={300} className="w-full h-48 object-cover" />}

//         <CiStar size={30} className="absolute top-3 right-3 text-white bg-white/40 rounded-full p-1" />
//       </div>

//       <div className="px-3 pb-4 pt-2">
//         <h2 className="font-bold text-lg">{breedGroup}</h2>
//         <p className="text-gray-400 text-sm">{origin}</p>
//       </div>
//     </div>
//   );
// };

// export default ListerPet;

// import Image from "next/image";
// import { CiStar } from "react-icons/ci";

// const ListerPet = ({ breedGroup, origin, image }) => {
//   return (
//     <div className="bg-white rounded-lg shadow-sm flex flex-col overflow-hidden cursor-pointer">
//       <div className="relative w-full">
//         {image && <Image src={image} width={400} height={300} className="w-full object-cover" alt="dog" />}

//         <CiStar size={30} className="absolute top-3 right-3 text-white bg-white/40 rounded-full p-1" />
//       </div>

//       <div className="px-3 pb-4 pt-2">
//         <h2 className="font-bold text-lg">{breedGroup}</h2>
//         <p className="text-gray-400 text-sm">{origin}</p>
//       </div>
//     </div>
//   );
// };

// export default ListerPet;

// import Image from "next/image";
// import Link from "next/link";
// import { CiStar } from "react-icons/ci";

// const ListerPet = ({ breedGroup, origin, image }) => {
//   return (
//     <div className="container mx-auto p-4 pt-12 grid grid-cols-2 gap-x-4 gap-y-6 items-start">
//       <div className={`bg-white rounded-lg shadow-sm flex flex-col overflow-hidden cursor-pointer `}>
//         <div className="relative w-full">
//           <Image src={image} width={400} height={300} className="w-full object-cover" />

//           <CiStar size={30} className="absolute top-3 right-3 text-white bg-white/40 rounded-full p-1" />
//         </div>

//         <div className="px-3 pb-4 pt-2">
//           <h2 className="font-bold text-lg">{breedGroup}</h2>
//           <p className="text-gray-400 text-sm">{origin} </p>
//         </div>
//       </div>
//     </div>
//   );
// };
// export default ListerPet;

// import Image from "next/image";
// import Link from "next/link";
// import { CiStar } from "react-icons/ci";
// import { IoSearchSharp } from "react-icons/io5";

// const pets = [
//   { id: "1", name: "Affenpinscher", location: "Germany", image: "https://placecats.com/neo/300/200" },
//   { id: "2", name: "Bulldog", location: "England", image: "https://placecats.com/neo/300/200" },
//   { id: "3", name: "Pug", location: "China", image: "https://placecats.com/neo/300/200" },
//   { id: "4", name: "Beagle", location: "UK", image: "https://placecats.com/neo/300/200" },
//   { id: "5", name: "Pug 2", location: "China", image: "https://placecats.com/neo/300/200" },
//   { id: "6", name: "Beagle 2", location: "UK", image: "https://placecats.com/neo/300/200" },
// ];

// export default function Page() {
//   return (
//     <section>
//       {/* 🔍 Search bar */}
//       <div className="flex items-center gap-3 px-5">
//         <div className="bg-red-300 p-4 rounded-full flex items-center justify-center">
//           <IoSearchSharp size={20} className="text-white" />
//         </div>

//         <input type="text" placeholder="search breeds" className="flex-1 border border-gray-300 rounded-full px-6 py-3 outline-none text-gray-700 placeholder:text-gray-400" />
//       </div>

//       {/* GRID */}
//       <div className="container mx-auto p-4 pt-12 grid grid-cols-2 gap-x-4 gap-y-6 items-start">

//         {pets.map((pet, i) => (
//           <Link href={`/pets/${pet.id}`} key={pet.id}>
//             <div className={`bg-white rounded-lg shadow-sm flex flex-col overflow-hidden cursor-pointer ${i % 2 === 1 ? "-mt-2" : ""}`}>
//               <div className="relative w-full">
//                 <Image src={pet.image} alt={pet.name} width={400} height={300} className="w-full object-cover" />

//                 <CiStar size={30} className="absolute top-3 right-3 text-white bg-white/40 rounded-full p-1" />
//               </div>

//               <div className="px-3 pb-4 pt-2">
//                 <h2 className="font-bold text-lg">{pet.name}</h2>
//                 <p className="text-gray-400 text-sm">{pet.location}</p>
//               </div>

//             </div>
//           </Link>
//         ))}
//       </div>
//     </section>
//   );
// }
