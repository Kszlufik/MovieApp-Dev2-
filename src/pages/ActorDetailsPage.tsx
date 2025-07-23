import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { getActorDetails, getActorCredits } from "../api/tmdb-api";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import CircularProgress from "@mui/material/CircularProgress";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";

const ActorDetailsPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  const { data: actor, isLoading, isError, error } = useQuery(
    ["actorDetails", id],
    () => getActorDetails(id!)
  );

  const { data: credits } = useQuery(
    ["actorCredits", id],
    () => getActorCredits(id!),
    { enabled: !!id }
  );

  if (isLoading) return <CircularProgress />;
  if (isError) return <p>Error: {(error as Error).message}</p>;

  return (
    <div style={{ padding: "16px" }}>
      <Grid container spacing={4}>
        <Grid item xs={12} md={4}>
          <Card>
            <CardMedia
              component="img"
              image={
                actor.profile_path
                  ? `https://image.tmdb.org/t/p/w500/${actor.profile_path}`
                  : "https://via.placeholder.com/500x750?text=No+Image"
              }
              alt={actor.name}
            />
          </Card>
        </Grid>
        <Grid item xs={12} md={8}>
          <Typography variant="h4" gutterBottom>
            {actor.name}
          </Typography>
          <Typography variant="body1" gutterBottom>
            {actor.biography || "No biography available."}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            Born: {actor.birthday} in {actor.place_of_birth}
          </Typography>
        </Grid>
      </Grid>

      {credits && credits.length > 0 && (
        <>
          <Typography variant="h5" gutterBottom style={{ marginTop: "24px" }}>
            Known For
          </Typography>
          <Grid container spacing={2}>
            {credits.slice(0, 12).map((movie: any) => (
              <Grid item key={movie.id} xs={6} sm={4} md={3} lg={2}>
                <Card>
                  <CardMedia
                    component="img"
                    image={
                      movie.poster_path
                        ? `https://image.tmdb.org/t/p/w200/${movie.poster_path}`
                        : "https://via.placeholder.com/200x300?text=No+Image"
                    }
                    alt={movie.title}
                  />
                  <CardContent>
                    <Typography variant="body2">{movie.title}</Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </>
      )}
    </div>
  );
};

export default ActorDetailsPage;
