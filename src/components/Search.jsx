import { IoSearchSharp } from "react-icons/io5";

const Search = async ({ searchParams }) => {
  const params = await searchParams;

  return (
    <div className="flex items-center gap-3 px-5">
      <form method="GET" className="flex items-center gap-3 w-full">
        <button type="submit" className="bg-red-300 p-4 rounded-full flex items-center justify-center hover:bg-red-400 transition-colors">
          <IoSearchSharp size={20} className="text-white" />
        </button>

        <input type="search" name="query" placeholder="search breeds" className="w-full border border-gray-300 rounded-full px-3 py-3 outline-none focus:ring-2 focus:ring-red-300" defaultValue={params?.query} />
      </form>
    </div>
  );
};

export default Search;
