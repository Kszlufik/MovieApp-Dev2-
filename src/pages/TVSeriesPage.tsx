import React from "react";
import { useQuery } from "react-query";
import { getPopularTVSeries } from "../api/tmdb-api";
import TVSeriesCard from "../components/TVSeriesCard/TVSeriesCard";
import Grid from "@mui/material/Grid";
import Header from "../components/headerMovieList";

interface TVSeries {
  id: number;
  name: string;
  poster_path: string | null;
}

const TVSeriesPage: React.FC = () => {
  const { data: series = [], isLoading, isError, error } = useQuery<TVSeries[]>(
    ["popularTVSeries"],
    getPopularTVSeries
  );

  if (isLoading) return <p>Loading popular TV series...</p>;
  if (isError) return <p>Error: {(error as Error).message}</p>;

  return (
    <div style={{ padding: "1px" }}>
      <Header title="Popular TV Series" />
      <Grid container spacing={5}>
        {series.map((tv) => (
          <Grid item key={tv.id} xs={6} md={3} lg={2}>
            <TVSeriesCard
              id={tv.id}
              name={tv.name}
              poster_path={tv.poster_path}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default TVSeriesPage;
