import React from "react";
import Project from "../project/Project";
import { COLORS } from "../Values/Colors";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Topbar from "../topbar/Topbar";
import Footer from "../footer/Footer";

function OpenProject() {
  return (
    <div>
      <Topbar />
      <div
        style={{
          backgroundColor: COLORS.primary1,
          paddingTop: "10vh",
          paddingBottom: "20px",
        }}
      >
        <div
          style={{
            paddingBottom: "5vh",
          }}
        >
          <h1
            style={{
              fontSize: "40px",
              color: COLORS.white,
              borderBottom: "5px solid",
              borderColor: COLORS.primary2,
              width: "150px",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            Explore
          </h1>
        </div>
        <Container maxWidth="lg">
          <Grid container spacing={2}>
            {[1, 1, 1, 1, 1, 1].map((e) => (
              <Grid item xs={12} md={6} lg={6} xl={3}>
                <Project />
              </Grid>
            ))}
          </Grid>
        </Container>
      </div>
      <div
        style={{
          position: "relative",
          bottom: "0",
          left: "0",
          right: "0",
        }}
      >
        <Footer />
      </div>
    </div>
  );
}

export default OpenProject;
