import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { getTVSeriesDetails } from "../api/tmdb-api";
import Spinner from "../components/spinner";
import { TVSeriesDetailsProps } from "../types/interfaces";
import TVSeriesPageTemplate from "../components/templateTVSeriesPage";
import TVSeriesDetails from "../components/TVSeriesDetails";

const TVSeriesDetailsPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { data: series, error, isLoading, isError } = useQuery<TVSeriesDetailsProps, Error>(
    ["tvSeriesDetails", id],
    () => getTVSeriesDetails(Number(id))
  );

  if (isLoading) return <Spinner />;
  if (isError) return <h1>{error.message}</h1>;

  return (
    <>
      {series ? (
        <TVSeriesPageTemplate series={series}>
          <TVSeriesDetails {...series} />
        </TVSeriesPageTemplate>
      ) : (
        <p>Waiting for TV series details</p>
      )}
    </>
  );
};

export default TVSeriesDetailsPage;
