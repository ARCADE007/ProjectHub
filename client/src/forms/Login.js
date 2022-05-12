import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";

import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { COLORS } from "../Values/Colors";
import loginImage from "../image/loginImage.svg";
import { styled } from "@mui/material/styles";
import { Context } from "../context/Context";
import axios from "axios";

export default function Login() {
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

  const { dispatch, isFetching } = React.useContext(Context);

  const handleSubmit = async (event) => {
    event.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const data1 = new FormData(event.currentTarget);
      const res = await axios.post("http://localhost:9898/api/auth/login", {
        userName: data1.get("userName"),
        password: data1.get("password"),
      });

      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
    } catch (error) {
      dispatch({ type: "LOGIN_FAILURE" });
    }
  };

  return (
    <div
      style={{
        background: COLORS.primary1,
        minHeight: "100vh",
      }}
    >
      <CssBaseline />
      <div>
        <Container component="main" maxWidth="xs">
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
                width: "115px",
                marginLeft: "auto",
                marginRight: "auto",
              }}
            >
              Login
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
            <Avatar
              sx={{
                width: "20vh",
                height: "20vh",
                marginLeft: "auto",
                marginRight: "auto",
                borderRadius: "0",
                marginBottom: "30px",
              }}
              src={loginImage}
            />

            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 3 }}
            >
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <CssTextField
                    required
                    fullWidth
                    id="userName"
                    label="User Name"
                    name="userName"
                  />
                </Grid>
                <Grid item xs={12}>
                  <CssTextField
                    required
                    fullWidth
                    type="password"
                    name="password"
                    label="Password"
                    id="password"
                    autoComplete="new-password"
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2, background: COLORS.primary2 }}
              >
                Sign In
              </Button>
              <Grid container justifyContent="flex-end">
                <Grid item>
                  <Link
                    style={{ color: COLORS.primary2 }}
                    href="/Register"
                    variant="body2"
                  >
                    Dont have an account? Register
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Container>
      </div>
      <div
        style={{
          marginTop: "50px",
          height: "50px",
          position: "relative",
          bottom: "0",
          left: "0",
          right: "0",
        }}
      ></div>
    </div>
  );
}
