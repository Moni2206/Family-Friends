"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";

const useFavorites = create(
  persist(
    (set) => ({
      favorites: [],

      setFavorite: (id) =>
        set((state) => ({
          favorites: [...state.favorites, { id }],
        })),

      removeFavorite: (id) =>
        set((state) => ({
          favorites: state.favorites.filter((f) => f.id !== id),
        })),
    }),
    {
      name: "favorites-storage",
    },
  ),
);

export default useFavorites;
