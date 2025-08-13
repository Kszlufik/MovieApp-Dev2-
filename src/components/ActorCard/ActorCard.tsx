import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardHeader from "@mui/material/CardHeader";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import img from "../../images/actor-placeholder.png";
import { BaseActorProps } from "../../types/interfaces";
import { Link } from "react-router-dom";
import AddToFavouriteActorIcon from "../cardIcons/AddToFavouriteActor";

const styles = {
  card: { maxWidth: 345 },
  media: { height: 400 },
};

interface ActorCardProps {
  actor: BaseActorProps;
}

const ActorCard: React.FC<ActorCardProps> = ({ actor }) => {
  return (
    <Card sx={styles.card}>
      <CardHeader
        title={<Typography variant="h5">{actor.name}</Typography>}
      />
      <CardMedia
        sx={styles.media}
        image={
          actor.profile_path
            ? `https://image.tmdb.org/t/p/w500/${actor.profile_path}`
            : img
        }
      />
      <CardContent>
        <Grid container>
          <Grid item xs={12}>
            <Typography variant="body1">
              Known for: {actor.known_for_department || "N/A"}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
      <CardActions disableSpacing>
        
        <AddToFavouriteActorIcon actor={actor} />

        <Link to={`/actors/${actor.id}`}>
          <Button variant="outlined" size="medium" color="primary">
            More Info ...
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
};

export default ActorCard;
