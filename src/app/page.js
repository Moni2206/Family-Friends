import Lister from "@/components/Lister";
import Search from "@/components/Search";
import { Suspense } from "react";

export default function Home() {
  return (
    <main>
      <Suspense fallback={<div>Loading ListerPet...</div>}>
        <Search />
        <Lister />
      </Suspense>
    </main>
  );
}

// // import SearchBar from "../components/SearchBar";
// import Search from "../components/Search";
// import Card from "../components/Card";
// import Image from "next/image";
// import { FaRegStar } from "react-icons/fa";
// import { IoIosArrowBack } from "react-icons/io";
// // import Description from "../components/Description";
// // import History from "../components/History";
// import BreedList from "@/components/Breedlist";

// export default function Home() {
//   return (
//     <main className="">
//       <section className="">
//         <Search />
//         {/* <SearchBar></SearchBar> */}
//       </section>

//       <BreedList />
//     </main>
//   );
// }
