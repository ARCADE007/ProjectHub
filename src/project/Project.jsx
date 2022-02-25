import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

import projectImage from "../../src/image/projectImage.png";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { COLORS } from "../Values/Colors";

export default function Project() {
  return (
    <Card
      sx={{
        borderRadius: "20px",
        marginTop: "10px",
        marginBottom: "10px",
        marginLeft: "auto",
        marginRight: "auto",
        objectFit: "cover",
        maxWidth: "80vw",

        boxShadow: "2px 2px 2px" + COLORS.primary2,
      }}
    >
      <CardActionArea>
        <CardMedia
          sx={{
            aspectRatio: "13/12",
            objectFit: "fill",
          }}
          component="img"
          src={projectImage}
          alt="green iguana"
        />

        <CardContent
          sx={{
            bgcolor: COLORS.white,
            paddingRight: "5%",
            paddingLeft: "5%",
          }}
        >
          <Typography
            sx={{ color: COLORS.primary1, marginTop: "10%" }}
            gutterBottom
            variant="h5"
            component="div"
          >
            Project Name
          </Typography>
          <Typography sx={{ color: COLORS.primary1 }} variant="body3">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions
        sx={{
          bgcolor: COLORS.white,
          paddingRight: "5%",
          paddingLeft: "5%",
          paddingBottom: "5%",
        }}
      >
        <Button
          sx={{
            bgcolor: COLORS.white,
            color: COLORS.primary1,
            borderColor: COLORS.primary1,
            marginTop: "5%",
            marginBottom: "5%",
          }}
          variant="outlined"
        >
          View Project
        </Button>
      </CardActions>
    </Card>
  );
}
