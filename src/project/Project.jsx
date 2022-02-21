import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import profileImage from "../../src/image/mark.jpeg";
import { Button, CardActionArea, CardActions } from "@mui/material";

export default function Project() {
  return (
    <Card
      sx={{
        m: "auto",
        objectFit: "cover",
        maxWidth: "50vh",
      }}
    >
      <CardActionArea>
        <CardMedia
          sx={{
            aspectRatio: "16/12",
            objectFit: "fill",
          }}
          component="img"
          src={profileImage}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
      </CardActions>
    </Card>
  );
}
