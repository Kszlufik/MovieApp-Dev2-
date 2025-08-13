import React, { MouseEvent, useContext } from "react";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { MoviesContext } from "../../contexts/moviesContext";
import { BaseActorProps } from "../../types/interfaces";

const AddToFavouriteActorIcon: React.FC<BaseActorProps> = (actor) => {
  const context = useContext(MoviesContext);

  const isFavourite = context.favourites.includes(actor.id);

  const onUserSelect = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (isFavourite) {
      context.removeFromFavourites(actor); 
    } else {
      context.addToFavourites(actor); 
    }
  };

  return (
    <IconButton aria-label="add to favorites" onClick={onUserSelect}>
      <FavoriteIcon color={isFavourite ? "error" : "disabled"} fontSize="large" />
    </IconButton>
  );
};

export default AddToFavouriteActorIcon;
