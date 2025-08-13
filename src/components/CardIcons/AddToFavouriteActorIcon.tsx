import React, { MouseEvent, useContext } from "react";
import { MoviesContext } from "../../contexts/moviesContext";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { BaseActorProps } from "../../types/interfaces";

interface AddToFavouriteActorIconProps {
  actor: BaseActorProps;
}

const AddToFavouriteActorIcon: React.FC<AddToFavouriteActorIconProps> = ({ actor }) => {
  const context = useContext(MoviesContext);

  const onUserSelect = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    context.toggleFavouriteActor(actor); 
  };

  const isFavourited = context.favouriteActors.includes(actor.id);

  return (
    <IconButton
      aria-label="add to favourites"
      onClick={onUserSelect}
      color={isFavourited ? "error" : "default"} 
    >
      <FavoriteIcon fontSize="large" />
    </IconButton>
  );
};

export default AddToFavouriteActorIcon;
