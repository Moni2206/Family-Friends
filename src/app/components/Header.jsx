import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-white shadow">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold">
          FamilyFriends
        </Link>
        <div className="flex gap-4">
          <Link href="/" className="hover:text-blue-500">
            Home
          </Link>
          <Link href="/pets" className="hover:text-blue-500">
            Pets
          </Link>
        </div>
      </nav>
    </header>
  );
}
