import React from "react";
import Project from "../project/Project";
// import styles from "../featuredProject/featuredProject.module.css";
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
        // className={styles.pProjectSection}
      >
        <div
          style={{
            paddingBottom: "5vh",
          }}
        >
          <h1
            style={{
              fontSize: "3vw",
              color: COLORS.white,
              borderBottom: "5px solid",
              borderColor: COLORS.primary2,
              width: "12vw",
              marginLeft: "auto",
              marginRight: "auto",
            }}
            // className={styles.pHeading}
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
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default OpenProject;
