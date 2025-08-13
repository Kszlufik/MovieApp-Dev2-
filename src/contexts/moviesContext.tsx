import React, { useState, useCallback, useEffect } from "react";
import { BaseMovieProps, BaseActorProps, Review } from "../types/interfaces";

interface MovieContextInterface {
  favourites: number[];
  addToFavourites: (movie: BaseMovieProps) => void;
  removeFromFavourites: (movie: BaseMovieProps) => void;
  favouriteActors: number[];
  toggleFavouriteActor: (actor: BaseActorProps) => void;
  addReview: (movie: BaseMovieProps, review: Review) => void;
  mustWatch: number[];
  addToPlaylist: (movie: BaseMovieProps) => void;
}

const initialContextState: MovieContextInterface = {
  favourites: [],
  addToFavourites: () => {},
  removeFromFavourites: () => {},
  favouriteActors: [],
  toggleFavouriteActor: () => {},
  addReview: () => {},
  mustWatch: [],
  addToPlaylist: () => {},
};

export const MoviesContext = React.createContext<MovieContextInterface>(initialContextState);

const MoviesContextProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [favourites, setFavourites] = useState<number[]>(() => {
    const saved = localStorage.getItem("favourites");
    return saved ? JSON.parse(saved) : [];
  });

  const [favouriteActors, setFavouriteActors] = useState<number[]>(() => {
    const saved = localStorage.getItem("favouriteActors");
    return saved ? JSON.parse(saved) : [];
  });

  const [mustWatch, setMustWatch] = useState<number[]>(() => {
    const saved = localStorage.getItem("mustWatch");
    return saved ? JSON.parse(saved) : [];
  });

  const [myReviews, setMyReviews] = useState<{ [movieId: number]: Review }>({});

  
  useEffect(() => localStorage.setItem("favourites", JSON.stringify(favourites)), [favourites]);
  useEffect(() => localStorage.setItem("favouriteActors", JSON.stringify(favouriteActors)), [favouriteActors]);
  useEffect(() => localStorage.setItem("mustWatch", JSON.stringify(mustWatch)), [mustWatch]);

  
  const addToFavourites = useCallback((movie: BaseMovieProps) => {
    setFavourites(prev => (prev.includes(movie.id) ? prev : [...prev, movie.id]));
  }, []);

  const removeFromFavourites = useCallback((movie: BaseMovieProps) => {
    setFavourites(prev => prev.filter(id => id !== movie.id));
  }, []);

  
  const toggleFavouriteActor = useCallback((actor: BaseActorProps) => {
    setFavouriteActors(prev =>
      prev.includes(actor.id) ? prev.filter(id => id !== actor.id) : [...prev, actor.id]
    );
  }, []);

  
  const addReview = useCallback((movie: BaseMovieProps, review: Review) => {
    setMyReviews(prev => ({ ...prev, [movie.id]: review }));
  }, []);

  
  const addToPlaylist = useCallback((movie: BaseMovieProps) => {
    setMustWatch(prev => (prev.includes(movie.id) ? prev : [...prev, movie.id]));
  }, []);

  return (
    <MoviesContext.Provider
      value={{
        favourites,
        addToFavourites,
        removeFromFavourites,
        favouriteActors,
        toggleFavouriteActor,
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
