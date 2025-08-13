import React, { useContext } from "react";
import { MoviesContext } from "../contexts/moviesContext";
import ActorCard from "../components/ActorCard/ActorCard";
import Grid from "@mui/material/Grid";

const FavouriteActorsPage: React.FC = () => {
  const { favouriteActors } = useContext(MoviesContext);

  if (favouriteActors.length === 0) return <h2>No favourite actors yet.</h2>;

  return (
    <Grid container spacing={4}>
      {favouriteActors.map((id) => (
        <Grid item key={id}>
          <ActorCard actor={{ id, name: "Loading...", known_for_department: "Unknown" } as any} />
        </Grid>
      ))}
    </Grid>
  );
};

export default FavouriteActorsPage;
