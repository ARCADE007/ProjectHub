import { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import axios from "axios";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { COLORS } from "../Values/Colors";
import { InputAdornment } from "@mui/material";
import registerImage from "../image/registerImage.svg";
import { styled } from "@mui/material/styles";

export default function Register() {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await axios.post("http://localhost:9898/api/auth/register", {
      userName,
      email,
      password,
    });
    console.log(res);
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
        minHeight: "100vh",
      }}
    >
      <Container component="main" maxWidth="xs">
        <CssBaseline />
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
              width: "170px",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            Register
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
            src={registerImage}
          />
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <CssTextField
                  name="userName"
                  required
                  fullWidth
                  // value={userName}
                  id="userName"
                  label="User Name"
                  InputProps={{
                    style: {
                      color: COLORS.white,
                      outlineColor: "white",
                    },
                  }}
                  // onChange={(e) => setUserName(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <CssTextField
                  required
                  fullWidth
                  // value={email}
                  id="email"
                  label="Email Address"
                  name="email"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <p style={{ color: COLORS.white }}> @jklu.edu.in </p>
                      </InputAdornment>
                    ),
                    style: {
                      color: COLORS.white,
                    },
                  }}
                  // onChange={(e) => setEmail(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <CssTextField
                  required
                  fullWidth
                  // value={password}
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  // onChange={(e) => setPassword(e.target.value)}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, background: COLORS.primary2 }}
            >
              Register
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link
                  style={{ color: COLORS.primary2 }}
                  href="#"
                  variant="body2"
                >
                  Already have an account? Log In
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
      <div
        style={{
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
