import React, { useEffect, useState } from "react";
import Container from "@mui/material/Container";
import { COLORS } from "../Values/Colors";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import CardMedia from "@mui/material/CardMedia";
import { CssBaseline } from "@mui/material";
import Footer from "../footer/Footer";
import Topbar from "../topbar/Topbar";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";

function ProjectDetails() {
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  const [projects, setProjects] = useState({});

  useEffect(() => {
    const getProject = async () => {
      const res = await axios.get("http://localhost:9898/api/project/" + path);

      setProjects(res.data);
    };
    getProject();
  }, [path]);

  return (
    <div>
      <CssBaseline />
      <Topbar />

      <div
        style={{
          background: COLORS.black,
          marginTop: "20px",
          paddingBottom: "5vh",
        }}
      >
        <Container component="main" maxWidth="lg">
          <div
            style={{
              paddingTop: "10vh",

              textAlign: "center",
            }}
          >
            <h1
              style={{
                fontSize: "40px",
                color: COLORS.white,
              }}
            >
              {projects.projectName}
            </h1>
          </div>
          <div>
            <p
              style={{
                color: COLORS.white,
                marginTop: "10vh",
                paddingRight: "5vw",
                paddingLeft: "5vw",
              }}
            >
              {projects.projectDescription}
            </p>
          </div>
          <div
            style={{
              marginTop: "10vh",
              marginBottom: "5vh",
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
                  <Link
                    style={{ textDecoration: "none", color: COLORS.white }}
                    to={`/?user=${projects.userName}`}
                  >
                    {projects.userName}
                  </Link>
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
        {projects.photo && (
          <CardMedia
            sx={{
              aspectRatio: "7/5",
              objectFit: "fill",
            }}
            component="img"
            src={projects.photo}
            alt="green iguana"
          />
        )}
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
