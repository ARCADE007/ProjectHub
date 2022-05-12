import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

import { Button, CardActionArea, CardActions } from "@mui/material";
import { COLORS } from "../Values/Colors";
import { Link } from "react-router-dom";

export default function Project(projects) {
  const PF = "http://localhost:9898/images/";

  return (
    <Card
      sx={{
        // borderRadius: "20px",
        marginTop: "10px",
        marginBottom: "10px",
        marginLeft: "auto",
        marginRight: "auto",
        objectFit: "cover",
        maxWidth: "80vw",

        // boxShadow: "2px 2px " + COLORS.primary2,
      }}
    >
      <CardActionArea>
        {projects.projects.photo && (
          <CardMedia
            sx={{
              aspectRatio: "13/12",
              objectFit: "fill",
            }}
            component="img"
            src={PF + projects.projects.photo}
            alt="green iguana"
          />
        )}

        <CardContent
          sx={{
            bgcolor: COLORS.white,
            paddingRight: "5%",
            paddingLeft: "5%",
          }}
        >
          <link></link>
          <Typography
            sx={{ marginTop: "10%" }}
            gutterBottom
            variant="h5"
            component="div"
          >
            {projects.projects.projectName}
          </Typography>
          <Typography sx={{ color: COLORS.primary1 }} variant="body3">
            {projects.projects.projectDescription}
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
        <Link
          style={{ textDecoration: "none", color: COLORS.primary1 }}
          to={`/projectDetails/${projects.projects._id}`}
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
        </Link>
      </CardActions>
    </Card>
  );
}
