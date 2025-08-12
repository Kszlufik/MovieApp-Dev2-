import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardHeader from "@mui/material/CardHeader";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CalendarIcon from "@mui/icons-material/CalendarTodayTwoTone";
import StarRateIcon from "@mui/icons-material/StarRate";
import Grid from "@mui/material/Grid";
import img from "../../images/film-poster-placeholder.png";
import { BaseTVProps } from "../../types/interfaces";
import { Link } from "react-router-dom";

const styles = {
  card: { maxWidth: 345 },
  media: { height: 500 },
};

interface TVSeriesCardProps {
  tv: BaseTVProps;
  action?: (t: BaseTVProps) => React.ReactNode;
}

const TVSeriesCard: React.FC<TVSeriesCardProps> = ({ tv, action }) => {
  return (
    <Card sx={styles.card}>
      <CardHeader
        title={
          <Typography variant="h5" component="p">
            {tv.name}
          </Typography>
        }
      />
      <CardMedia
        sx={styles.media}
        image={
          tv.poster_path
            ? `https://image.tmdb.org/t/p/w500/${tv.poster_path}`
            : img
        }
      />
      <CardContent>
        <Grid container>
          <Grid item xs={6}>
            <Typography variant="h6" component="p">
              <CalendarIcon fontSize="small" /> {tv.first_air_date}
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h6" component="p">
              <StarRateIcon fontSize="small" />{" "}
              {tv.vote_average ? tv.vote_average.toFixed(1) : "N/A"}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
      <CardActions disableSpacing>
        {action ? action(tv) : null}
        <Link to={`/tv/${tv.id}`}>
  <Button variant="outlined" size="medium" color="primary">
    More Info ...
  </Button>
</Link>

      </CardActions>
    </Card>
  );
};

export default TVSeriesCard;
