import React from "react";
import Container from "@mui/material/Container";
import { COLORS } from "../Values/Colors";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";

function ProjectDetails() {
  return (
    <div
      style={{
        background: COLORS.black,
        minHeight: "50vh",
      }}
    >
      <Container component="main" maxWidth="lg">
        <div
          style={{
            paddingTop: "10vh",
          }}
        >
          <h1
            style={{
              fontSize: "2vw",
              color: COLORS.white,
              borderBottom: "5px solid",
              borderColor: COLORS.primary2,
              width: "14vw",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            Project Name
          </h1>
        </div>
        <div
          style={{
            marginTop: "5vh",
          }}
        >
          <Grid
            container
            irection="row"
            justifyContent="space-evenly"
            alignItems="center"
            columns={{ xs: 4, sm: 8, md: 12 }}
            spacing={2}
          >
            <Grid
              sx={{ height: "100px", width: "" }}
              textAlign="center"
              item
              xs={6}
            >
              <Button variant="contained">Contained</Button>
            </Grid>
            <Grid textAlign="center" item xs={6}>
              <Button variant="contained">Contained</Button>
            </Grid>
          </Grid>
        </div>
      </Container>
    </div>
  );
}

export default ProjectDetails;
