import React, { useState, useCallback, useEffect } from "react";
import { BaseMovieProps, Review } from "../types/interfaces";

interface MovieContextInterface {
  favourites: number[];
  addToFavourites: (movie: BaseMovieProps) => void;
  removeFromFavourites: (movie: BaseMovieProps) => void;
  addReview: (movie: BaseMovieProps, review: Review) => void;
  mustWatch: number[];
  addToPlaylist: (movie: BaseMovieProps) => void;
}

const initialContextState: MovieContextInterface = {
  favourites: [],
  addToFavourites: () => {},
  removeFromFavourites: () => {},
  addReview: () => {},
  mustWatch: [],
  addToPlaylist: () => {},
};

export const MoviesContext = React.createContext<MovieContextInterface>(initialContextState);

const MoviesContextProvider: React.FC<React.PropsWithChildren> = ({ children }) => {

  const [favourites, setFavourites] = useState<number[]>(() => {
    const stored = localStorage.getItem("favourites");
    return stored ? JSON.parse(stored) : [];
  });

  const [mustWatch, setMustWatch] = useState<number[]>(() => {
    const stored = localStorage.getItem("mustWatch");
    return stored ? JSON.parse(stored) : [];
  });

  const [myReviews, setMyReviews] = useState<{ [movieId: number]: Review }>({});


  useEffect(() => {
    localStorage.setItem("favourites", JSON.stringify(favourites));
  }, [favourites]);

  useEffect(() => {
    localStorage.setItem("mustWatch", JSON.stringify(mustWatch));
  }, [mustWatch]);

  const addToFavourites = useCallback((movie: BaseMovieProps) => {
    setFavourites((prev) => (prev.includes(movie.id) ? prev : [...prev, movie.id]));
  }, []);

  const removeFromFavourites = useCallback((movie: BaseMovieProps) => {
    setFavourites((prev) => prev.filter((id) => id !== movie.id));
  }, []);

  const addReview = useCallback((movie: BaseMovieProps, review: Review) => {
    setMyReviews((prev) => ({ ...prev, [movie.id]: review }));
  }, []);

  const addToPlaylist = useCallback((movie: BaseMovieProps) => {
    setMustWatch((prev) => (prev.includes(movie.id) ? prev : [...prev, movie.id]));
  }, []);

  return (
    <MoviesContext.Provider
      value={{
        favourites,
        addToFavourites,
        removeFromFavourites,
        addReview,
        mustWatch,
        addToPlaylist,
      }}
    >
      {children}
    </MoviesContext.Provider>
  );
};

export default MoviesContextProvider;
