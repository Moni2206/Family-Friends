import Link from "next/link";
import { IoIosNotificationsOutline } from "react-icons/io";

export default function Header() {
  return (
    <header>
      {" "}
      <div className="container mx-auto p-5 pb-[3rem] pt-[2rem] grid grid-cols-2 mx-auto justify-between flex items-center h-16 ">
        {" "}
        <h1 className="font-extrabold text-lg">FamilyFriends</h1> <IoIosNotificationsOutline size={30} className="col-end-4 " />{" "}
      </div>{" "}
    </header>
  );
}
