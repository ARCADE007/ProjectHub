import React, { useState, useContext, useEffect } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";

import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Container from "@mui/material/Container";
import { COLORS } from "../Values/Colors";
import Footer from "../footer/Footer";
import axios from "axios";
import { styled } from "@mui/material/styles";
import Topbar from "../topbar/Topbar";
import { Context } from "../context/Context";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

export default function UserProfile() {
  const { user, dispatch } = useContext(Context);
  const [file, setFile] = useState(null);
  const [open, setOpen] = useState(false);
  const PF = "http://localhost:9898/images/";

  const handleSubmit = async (event) => {
    event.preventDefault();
    dispatch({ type: "UPDATE_START" });

    const dataFull = new FormData(event.currentTarget);
    const updatedUser = {
      userId: user._id,
      firstName: dataFull.get("firstName"),
      lastName: dataFull.get("lastName"),
    };
    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      updatedUser.profilePic = filename;
      try {
        await axios.post("http://localhost:9898/api/upload", data);
      } catch (error) {}
    }
    try {
      const res = await axios.put(
        "http://localhost:9898/api/user/" + user._id,
        updatedUser
      );
      dispatch({ type: "UPDATE_SUCCESS", payload: res.data });
      setOpen(true);
    } catch (error) {
      dispatch({ type: "UPDATE_ERROR" });
    }
  };
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const CssTextField = styled(TextField)({
    "& label.Mui-focused": {
      color: COLORS.primary2,
    },
    "& 	.MuiInputLabel-root": {
      color: COLORS.white,
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: COLORS.primary2,
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: COLORS.white,
      },
      "&:hover fieldset": {
        borderColor: COLORS.primary2,
      },
      "&.Mui-focused fieldset": {
        borderColor: COLORS.primary2,
      },
    },
  });

  return (
    <div
      style={{
        background: COLORS.primary1,
      }}
    >
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          Updated Successfully
        </Alert>
      </Snackbar>
      <Container component="main" maxWidth="sm">
        <CssBaseline />
        <Topbar />
        <div
          style={{
            paddingTop: "15vh",
          }}
        >
          <h1
            style={{
              fontSize: "40px",
              color: COLORS.white,
              borderBottom: "5px solid",
              borderColor: COLORS.primary2,
              width: "135px",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            Profile
          </h1>
        </div>
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <input
            accept="image/*"
            style={{ display: "none" }}
            id="raised-button-file"
            multiple
            type="file"
            onChange={(e) => setFile(e.target.files[0])}
          />
          <label htmlFor="raised-button-file">
            {file ? (
              <Avatar
                src={file ? URL.createObjectURL(file) : PF + user.profilePic}
                sx={{
                  m: 1,
                  bgcolor: COLORS.primary2,
                  height: "200px",
                  width: "200px",
                }}
              >
                <LockOutlinedIcon />
              </Avatar>
            ) : (
              <Avatar
                src={user.profilePic}
                sx={{
                  m: 1,
                  bgcolor: COLORS.primary2,
                  height: "200px",
                  width: "200px",
                }}
              >
                <LockOutlinedIcon />
              </Avatar>
            )}
          </label>

          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <CssTextField
                  name="firstName"
                  required
                  fullWidth
                  autoFocus
                  label="First Name"
                  // value={firstName}
                  // onChange={(e) => setFirstName(e.target.value)}
                  InputProps={{
                    style: {
                      color: COLORS.white,
                      outlineColor: "white",
                    },
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <CssTextField
                  required
                  fullWidth
                  label="Last Name"
                  name="lastName"
                  // value={lastName}
                  // onChange={(e) => setLastName(e.target.value)}
                  InputProps={{
                    style: {
                      color: COLORS.white,
                    },
                  }}
                />
              </Grid>

              {/* <Grid item xs={12} sm={6}>
                <CssTextField
                  autoComplete="given-name"
                  name="skill1"
                  required
                  fullWidth
                  id="skill1"
                  label="Skill 1"
                  autoFocus
                  InputProps={{
                    style: {
                      color: COLORS.white,
                    },
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <CssTextField
                  autoComplete="given-name"
                  name="skill2"
                  required
                  fullWidth
                  id="skill2"
                  label="Skill 2"
                  autoFocus
                  InputProps={{
                    style: {
                      color: COLORS.white,
                    },
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <CssTextField
                  autoComplete="given-name"
                  name="skill3"
                  required
                  fullWidth
                  id="skill3"
                  label="Skill 3"
                  autoFocus
                  InputProps={{
                    style: {
                      color: COLORS.white,
                    },
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <CssTextField
                  autoComplete="given-name"
                  name="skill4"
                  required
                  fullWidth
                  id="skill4"
                  label="Skill 4"
                  autoFocus
                  InputProps={{
                    style: {
                      color: COLORS.white,
                    },
                  }}
                />
              </Grid> */}
              {/* <Grid item xs={12}>
                <CssTextField
                  required
                  fullWidth
                  label="User Name"
                  placeholder={user.userName}
                  // value={user.userName}
                  // onChange={(e) => setUserName(e.target.value)}
                  name="userName"
                />
              </Grid>
              <Grid item xs={12}>
                <CssTextField
                  required
                  fullWidth
                  label="Email Address"
                  name="email"
                  // value={user.email}
                  // onChange={(e) => setEmail(e.target.value)}
                />
              </Grid> */}

              {/* <Grid item xs={12}>
                <CssTextField
                  required
                  fullWidth
                  id="aboutYou"
                  label="About You"
                  name="aboutYou"
                  multiline
                  rows={6}
                  InputProps={{
                    style: {
                      color: COLORS.white,
                    },
                  }}
                />
              </Grid> */}
              {/* <Grid item xs={12}>
                <CssTextField
                  required
                  fullWidth
                  // value={password}
                  name="password"
                  label="Password"
                  // onChange={(e) => setPassword(e.target.value)}
                  id="password"
                />
              </Grid> */}
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, background: COLORS.primary2 }}
            >
              Update
            </Button>
          </Box>
        </Box>
      </Container>
      <div
        style={{
          marginTop: "50px",
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
