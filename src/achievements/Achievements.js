import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

import achievementsImage from "../../src/image/achievements.jpg";
import { CardActionArea } from "@mui/material";
import { COLORS } from "../Values/Colors";

export default function Achievements() {
  return (
    <Card
      sx={{
        backgroundColor: COLORS.primary1,
        marginTop: "10px",
        marginBottom: "10px",
        marginLeft: "auto",
        marginRight: "auto",
        objectFit: "cover",
    
        // boxShadow: "3px 3px 3px " + COLORS.primary2,
        boxShadow: "-moz-initial",
      }}
    >
      <CardActionArea
        sx={{
          display: "grid ",
          gridTemplateColumns: "repeat(2, 1fr)",
        }}
      >
        <CardMedia
          sx={{
            aspectRatio: "8/5",
            objectFit: "fill",
          }}
          component="img"
          src={achievementsImage}
          alt="green iguana"
        />

        <CardContent
          sx={{
            bgcolor: COLORS.primary1,
            paddingRight: "5%",
            paddingLeft: "5%",
          }}
        >
          <Typography sx={{ color: COLORS.white }} variant="body3">
            " Lizards are a widespread group of squamate reptiles, with over
            6,000 species, ranging across all continents except Antarctica
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica "
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
