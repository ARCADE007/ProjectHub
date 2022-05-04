import React from "react";
import Container from "@mui/material/Container";
import { COLORS } from "../Values/Colors";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import CardMedia from "@mui/material/CardMedia";
import projectImage from "../../src/image/projectImage.png";
import { CssBaseline } from "@mui/material";
import Footer from "../footer/Footer";

function ProjectDetails() {
  return (
    <div>
      <CssBaseline />

      <div
        style={{
          background: COLORS.black,

          paddingBottom: "5vh",
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
                fontSize: "40px",
                color: COLORS.white,
                borderBottom: "5px solid",
                borderColor: COLORS.primary2,
                width: "280px",
                marginLeft: "auto",
                marginRight: "auto",
              }}
            >
              Project Name
            </h1>
          </div>
          <div>
            <p
              style={{
                color: COLORS.white,
                marginTop: "5vh",
                paddingRight: "5vw",
                paddingLeft: "5vw",
              }}
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.{" "}
            </p>
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
              <Grid textAlign="center" item xs={6}>
                <Button
                  sx={{
                    height: "50px",
                    width: "120px",
                    background: COLORS.primary2,
                  }}
                  variant="contained"
                >
                  View Profile
                </Button>
              </Grid>
              <Grid textAlign="center" item xs={6}>
                <Button
                  sx={{
                    height: "50px",
                    width: "120px",
                    background: COLORS.primary2,
                  }}
                  variant="contained"
                >
                  Github
                </Button>
              </Grid>
            </Grid>
          </div>
        </Container>
      </div>
      <div
        style={{
          padding: "10%",
          background: COLORS.primary1,
        }}
      >
        <CardMedia
          sx={{
            aspectRatio: "7/5",
            objectFit: "fill",
          }}
          component="img"
          src={projectImage}
          alt="green iguana"
        />
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

export default ProjectDetails;
