const Detaljeview = () => {
  return (
    <section>
      <Image loading="eager" alt="Cat" src="https://placecats.com/neo/300/200" width={400} height={300} className="w-full object-cover rounded-b-lg " />
    </section>
  );
};

export default Detaljeview;

// /app/pets/[id]/page.jsx

// import Image from "next/image";
// import Link from "next/link";

// const pets = [
//   {
//     id: "1",
//     name: "Affenpinscher",
//     location: "Germany",
//     image: "https://placecats.com/neo/300/200",
//   },
//   {
//     id: "2",
//     name: "Bulldog",
//     location: "England",
//     image: "https://placecats.com/neo/300/200",
//   },
//   {
//     id: "3",
//     name: "Pug",
//     location: "China",
//     image: "https://placecats.com/neo/300/200",
//   },
//   {
//     id: "4",
//     name: "Beagle",
//     location: "UK",
//     image: "https://placecats.com/neo/300/200",
//   },
// ];

// export default function Page({ params }) {
//   const pet = pets.find((p) => p.id === params.id);

//   if (!pet) return <div>Not found</div>;

//   return (
//     <section className="p-4">
//       {/* 🔙 Back */}
//       <Link href="/pets" className="text-blue-500">
//         ← Tilbage
//       </Link>

//       {/* IMAGE */}
//       <Image src={pet.image} alt={pet.name} width={500} height={300} className="w-full rounded-xl object-cover mt-4" />

//       {/* INFO */}
//       <h1 className="text-2xl font-bold mt-4">{pet.name}</h1>
//       <p className="text-gray-400">{pet.location}</p>
//     </section>
//   );
// }
