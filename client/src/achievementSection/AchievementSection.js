import React from "react";
import { COLORS } from "../Values/Colors";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Achievements from "../achievements/Achievements";
import styles from "../achievementSection/achievementSection.css";

function AchievementSection() {
  return (
    <div
      style={{
        backgroundColor: COLORS.primary1,
        paddingTop: "5vh",
      }}
    >
      <div
        style={{
          paddingBottom: "5vh",
        }}
      >
        <h1
          className={styles.pHeading}
          style={{
            fontSize: "3vw",
            color: COLORS.white,
            borderBottom: "5px solid",
            borderColor: COLORS.primary2,
            width: "auto",
            maxWidth: "37%",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          Honor & Achievements
        </h1>
      </div>
      <Container maxWidth="md">
        <Grid container spacing={2}>
          {[1, 1].map((e) => (
            <Grid item xs={12} md={12} lg={12} xl={12}>
              <Achievements />
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
}

export default AchievementSection;
