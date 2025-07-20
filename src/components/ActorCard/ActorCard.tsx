import React from "react";
import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";

interface ActorCardProps {
  id: number;
  name: string;
  profile_path: string | null;
}

const styles = {
  card: { maxWidth: 345 },
  media: { height: 350 },
  avatar: { backgroundColor: "#1976d2" }, 
};

const ActorCard: React.FC<ActorCardProps> = ({ id, name, profile_path }) => {
  const avatarLetter = name ? name.charAt(0).toUpperCase() : "?";

  return (
    <Card sx={styles.card}>
      <CardHeader
        avatar={
          profile_path ? (
            <Avatar
              alt={name}
              src={`https://image.tmdb.org/t/p/w45/${profile_path}`}
              sx={{ width: 40, height: 40 }}
            />
          ) : (
            <Avatar sx={styles.avatar}>{avatarLetter}</Avatar>
          )
        }
        title={
          <Typography
            variant="h6"
            component={Link}
            to={`/actors/${id}`}
            sx={{ textDecoration: "none", color: "#1976d2" }} 
          >
            {name}
          </Typography>
        }
      />
      {profile_path ? (
        <CardMedia
          component="img"
          image={`https://image.tmdb.org/t/p/w500/${profile_path}`}
          alt={name}
          sx={styles.media}
        />
      ) : (
        <div
          style={{
            height: 350,
            backgroundColor: "#e0e0e0",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "#757575",
          }}
        >
          No Image Available
        </div>
      )}
      <CardContent>
      </CardContent>
      <CardActions>
        <Button size="small" color="primary" component={Link} to={`/actors/${id}`}>
          View Profile
        </Button>
      </CardActions>
    </Card>
  );
};

export default ActorCard;
