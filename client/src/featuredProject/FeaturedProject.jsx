import React from "react";
import Project from "../project/Project";
// import styles from "./featuredproject.module.css";
import { COLORS } from "../Values/Colors";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";

function FeaturedProject() {
  return (
    <div
      style={{
        backgroundColor: COLORS.primary1,
        paddingTop: "5vh",
      }}
      // className={styles.pProjectSection}
    >
      <div
        style={{
          paddingBottom: "5vh",
        }}
      >
        <h1
          style={{
            fontSize: "30px",
            color: COLORS.white,
            borderBottom: "5px solid",
            borderColor: COLORS.primary2,
            width: "275px",
            marginLeft: "auto",
            marginRight: "auto",
          }}
          // className={styles.pHeading}
        >
          Featured Projects
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
  );
}

export default FeaturedProject;
