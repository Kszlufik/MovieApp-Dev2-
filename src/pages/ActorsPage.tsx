import React, { useState } from "react";
import { useQuery } from "react-query";
import { getPopularActors } from "../api/tmdb-api";
import ActorCard from "../components/ActorCard/ActorCard";
import Grid from "@mui/material/Grid";
import Header from "../components/headerMovieList";
import ActorFilterUI from "../components/actorFilterUI/ActorFilterUI";
import { BaseActorProps } from "../types/interfaces";

const ActorsPage: React.FC = () => {
  const { data: actors = [], isLoading, isError, error } = useQuery<BaseActorProps[]>(
    ["popularActors"],
    getPopularActors
  );

  const [nameFilter, setNameFilter] = useState("");

  if (isLoading) return <p>Loading popular actors...</p>;
  if (isError) return <p>Error: {(error as Error).message}</p>;

  const filteredActors = actors.filter((actor) =>
    actor.name?.toLowerCase().includes(nameFilter.toLowerCase())
  );

  return (
    <div style={{ padding: "16px" }}>
      <Header title="Popular Actors" />
      <ActorFilterUI
        nameFilter={nameFilter}
        onFilterChange={(value) => setNameFilter(value)}
      />
      <Grid container spacing={5}>
        {filteredActors.map((actor) => (
          <Grid item key={actor.id} xs={6} md={3} lg={2}>
            <ActorCard actor={actor} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default ActorsPage;
