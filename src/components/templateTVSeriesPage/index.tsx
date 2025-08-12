import React from "react";
import { TVSeriesDetailsProps } from "../types/interfaces";

interface TemplateProps {
  series: TVSeriesDetailsProps;
  children: React.ReactNode;
}

const TVSeriesPageTemplate: React.FC<TemplateProps> = ({ series, children }) => {
  return (
    <div className="tvseries-page">
      <div className="poster">
        <img
          src={`https://image.tmdb.org/t/p/w500/${series.poster_path}`}
          alt={series.name}
        />
      </div>
      <div className="details">
        {children}
      </div>
    </div>
  );
};

export default TVSeriesPageTemplate;
