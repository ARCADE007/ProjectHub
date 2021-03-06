import React, { useContext } from "react";
import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";
import footerImage from "../image/mark.png";
import { Container } from "@mui/material";
import { COLORS } from "../Values/Colors";
import instaIcon from "../image/iconInstagram.svg";
import linkdeinIcon from "../image/iconLinkedin.svg";
import gitIcon from "../image/iconGithub.svg";
import mailIcon from "../image/iconMail.svg";
import { Context } from "../context/Context";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

function Footer() {
  const PF = "http://localhost:9898/images/";

  const { user } = useContext(Context);

  return (
    <div
      style={{
        backgroundColor: COLORS.black,

        padding: "5vh",
      }}
    >
      <Container maxWidth="xl">
        <Grid container spacing={5}>
          <Grid item xs={6} sm={6} md={6} lg={6}>
            <div
              style={{
                width: "150px",
                height: "100px",
                marginLeft: "auto",
                marginRight: "auto",
                color: COLORS.white,
              }}
            >
              <h1>Let's Connect</h1>

              <div
                style={{
                  marginTop: "10px",
                }}
                className="row"
              >
                <Grid container spacing={0}>
                  <Grid item xs>
                    <img src={instaIcon} alt="Instagram" />
                  </Grid>
                  <Grid item xs>
                    <img src={gitIcon} alt="Github" />
                  </Grid>
                  <Grid item xs>
                    <img src={mailIcon} alt="Mail" />
                  </Grid>
                  <Grid item xs>
                    <img src={linkdeinIcon} alt="Linkdein" />
                  </Grid>
                </Grid>
              </div>
            </div>
          </Grid>
          <Grid item xs={6} sm={6} md={6} lg={6}>
            {user ? (
              <Avatar
                sx={{
                  width: "150px",
                  height: "150px",
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
                src={PF + user.profilePic}
              />
            ) : (
              <Avatar>
                <AccountCircleIcon />
              </Avatar>
            )}
          </Grid>
        </Grid>
      </Container>
      <Container maxWidth="xs">
        <div
          style={{
            marginLeft: "auto",
            marginRight: "auto",
            padding: "10%",
            color: COLORS.white,
          }}
        >
          <p>Created by @Arcade | All Reserved</p>
        </div>
      </Container>
    </div>
  );
}

export default Footer;
