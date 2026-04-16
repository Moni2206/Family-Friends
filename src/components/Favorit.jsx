"use client";

import { CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa6";
import useFavorites from "@/stores/favorite";

const Favorit = ({ id }) => {
  const { favorites, setFavorite, removeFavorite } = useFavorites();

  const isFavorite = favorites.some((f) => f.id === id);

  return isFavorite ? (
    <CiStar size={30} className="absolute top-3 right-3 text-white bg-white/40 rounded-full p-1 z-10 cursor-pointer" onClick={() => removeFavorite(id)} />
  ) : (
    <FaStar size={30} className="absolute top-3 right-3 text-white bg-white/40 rounded-full p-1 z-10 cursor-pointer" onClick={() => setFavorite(id)} />
  );
};

export default Favorit;
