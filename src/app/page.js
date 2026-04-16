import Lister from "@/components/Lister";
import Search from "@/components/Search";
import { Suspense } from "react";

export default function Home({ searchParams }) {
  return (
    <main>
      <Suspense fallback={<div>Loading search...</div>}>
        <Search searchParams={searchParams} />
      </Suspense>

      <Suspense fallback={<div>Loading dogs...</div>}>
        <Lister searchParams={searchParams} />
      </Suspense>
    </main>
  );
}
