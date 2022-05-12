import React, { useState, useEffect } from "react";
import Project from "../project/Project";
import { COLORS } from "../Values/Colors";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Topbar from "../topbar/Topbar";
import Footer from "../footer/Footer";
import axios from "axios";
import { useLocation } from "react-router-dom";

function OpenProject() {
  const [projects, setProjects] = useState([]);
  const { search } = useLocation();

  useEffect(() => {
    const fetchProjects = async () => {
      const res = await axios.get(
        "http://localhost:9898/api/project" + search,
        {
          withCredentials: false,
        }
      );

      setProjects(res.data);
    };
    fetchProjects();
  }, [search]);

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
        <Container sx={{ minHeight: "45vh" }} maxWidth="lg">
          <Grid container spacing={4}>
            {projects.map((p, index) => {
              return (
                <Grid item xs={3} md={6} sm={6} lg={6} xl={3}>
                  <Project key={index} projects={p} />;
                </Grid>
              );
            })}
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
