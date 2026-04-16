import Lister from "@/components/Lister";
import Search from "@/components/Search";
import { Suspense } from "react";

export default function Home({ searchParams }) {
  return (
    <main>
      <Suspense fallback={<div>Loading...</div>}>
        <Search searchParams={searchParams} />
        <Lister searchParams={searchParams} />
      </Suspense>
    </main>
  );
}
