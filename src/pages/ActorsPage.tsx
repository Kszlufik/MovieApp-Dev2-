import React from "react";
import { useQuery } from "react-query";
import { getPopularActors } from "../api/tmdb-api";
import ActorCard from "../components/ActorCard/ActorCard";
import Grid from "@mui/material/Grid";
import Header from "../components/headerMovieList";



interface Actor {
  id: number;
  name: string;
  profile_path: string | null;
}

const ActorsPage: React.FC = () => {
  const { data: actors = [], isLoading, isError, error } = useQuery<Actor[]>(
    ["popularActors"],
    getPopularActors
  );

  if (isLoading) return <p>Loading popular actors...</p>;
  if (isError) return <p>Error: {(error as Error).message}</p>;

  return (
    <div style={{ padding: "1px" }}>
      <Header title="Popular Actors" />
      <Grid container spacing={5}>
        {actors.map((actor) => (
          <Grid item key={actor.id} xs={6} md={3} lg={2}>
            <ActorCard
              id={actor.id}
              name={actor.name}
              profile_path={actor.profile_path}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default ActorsPage;
