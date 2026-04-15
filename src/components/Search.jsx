import { IoSearchSharp } from "react-icons/io5";

const Search = () => {
  return (
    <div className="flex items-center gap-3 px-5">
      <div className="bg-red-300 p-4 rounded-full flex items-center justify-center">
        <IoSearchSharp size={20} className="text-white" />
      </div>
      <form>
        <input type="search " name="query" placeholder="search breeds" className="flex-1 border border-gray-300 rounded-full px-3 py-3 outline-none text-gray-700 placeholder:text-gray-400" />
        {/* <button type="submit">Search</button> */}
      </form>
    </div>
  );
};

export default Search;
