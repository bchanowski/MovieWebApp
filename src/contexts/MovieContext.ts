import { createContext } from "react";

// Define the Movie interface
export interface Movie {
  id: number;
  title: string;
  poster_path: string;
  release_date: string;
}

// Define the shape of the MovieContext
export interface MovieContextType {
  favorites: Movie[];
  addToFavorites: (movie: Movie) => void;
  removeFromFavorites: (movieId: number) => void;
  isFavorite: (movieId: number) => boolean;
}

// Create the context with a default value
export const MovieContext = createContext<MovieContextType>({
  favorites: [],
  addToFavorites: () => {},
  removeFromFavorites: () => {},
  isFavorite: () => false,
});
