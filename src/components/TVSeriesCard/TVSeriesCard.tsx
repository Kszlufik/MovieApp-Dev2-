import React from "react";
import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

interface TVSeriesCardProps {
  id: number;
  name: string;
  poster_path: string | null;
}

const TVSeriesCard: React.FC<TVSeriesCardProps> = ({ id, name, poster_path }) => {
  return (
    <Card sx={{ maxWidth: 200 }}>
      <Link to={`/tv/${id}`} style={{ textDecoration: "none" }}>
        <CardMedia
          component="img"
          height="300"
          image={
            poster_path
              ? `https://image.tmdb.org/t/p/w500${poster_path}`
              : "https://via.placeholder.com/200x300?text=No+Image"
          }
          alt={name}
        />
        <CardContent>
          <Typography variant="subtitle1" component="div">
            {name}
          </Typography>
        </CardContent>
      </Link>
    </Card>
  );
};

export default TVSeriesCard;
