import React, { MouseEvent, useContext } from "react";
import { MoviesContext } from "../../contexts/moviesContext";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { BaseMovieProps, BaseTVProps } from "../../types/interfaces";

interface AddToFavouritesIconProps extends BaseMovieProps, BaseTVProps {}

const AddToFavouritesIcon: React.FC<AddToFavouritesIconProps> = (item) => {
  const { favourites, addToFavourites, removeFromFavourites } = useContext(MoviesContext);

  const isFavourite = favourites.includes(item.id);

  const onUserSelect = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (isFavourite) {
      removeFromFavourites(item);
    } else {
      addToFavourites(item);
    }
  };

  return (
    <IconButton aria-label="toggle favourites" onClick={onUserSelect}>
      <FavoriteIcon color={isFavourite ? "error" : "disabled"} fontSize="large" />
    </IconButton>
  );
};

export default AddToFavouritesIcon;
