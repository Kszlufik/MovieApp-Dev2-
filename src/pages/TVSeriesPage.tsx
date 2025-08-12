import React from "react";
import { useQuery } from "react-query";
import { getPopularTVSeries } from "../api/tmdb-api";
import TVSeriesCard from "../components/TVSeriesCard/TVSeriesCard";
import Grid from "@mui/material/Grid";
import Header from "../components/headerMovieList";
import { BaseTVProps } from "../types/interfaces";

const styles = {
  root: {
    backgroundColor: "#bfbfbf",  
  },
};

const TVSeriesPage: React.FC = () => {
  const { data: series = [], isLoading, isError, error } = useQuery<BaseTVProps[]>(
    ["popularTVSeries"],
    getPopularTVSeries
  );

  if (isLoading) return <p>Loading popular TV series...</p>;
  if (isError) return <p>Error: {(error as Error).message}</p>;

  return (
    <Grid container sx={styles.root} style={{ padding: "15px" }}>
      <Grid item xs={12}>
        <Header title="Popular TV Series" />
      </Grid>
      <Grid item container spacing={5}>
        {series.map((tv) => (
          <Grid item key={tv.id} xs={6} md={3} lg={2}>
            <TVSeriesCard tv={tv} />
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

export default TVSeriesPage;
