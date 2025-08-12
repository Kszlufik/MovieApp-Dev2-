import React from "react";
import { TVSeriesDetailsProps } from "../types/interfaces";

const TVSeriesDetails: React.FC<TVSeriesDetailsProps> = (series) => {
  return (
    <>
      <h2>{series.name}</h2>
      <p><strong>First Air Date:</strong> {series.first_air_date}</p>
      <p><strong>Rating:</strong> {series.vote_average}</p>
      <p><strong>Seasons:</strong> {series.number_of_seasons}</p>
      <p><strong>Episodes:</strong> {series.number_of_episodes}</p>
      <p>{series.overview}</p>

      <h3>Genres</h3>
      <ul>
        {series.genres.map((g) => (
          <li key={g.id}>{g.name}</li>
        ))}
      </ul>

      {series.homepage && (
        <a href={series.homepage} target="_blank" rel="noopener noreferrer">
          Official Homepage
        </a>
      )}
    </>
  );
};

export default TVSeriesDetails;
