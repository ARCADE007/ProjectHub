import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Container from "@mui/material/Container";
import { COLORS } from "../Values/Colors";
import Footer from "../footer/Footer";
import { InputAdornment } from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import IconButton from "@mui/material/IconButton";
import loginImage from "../image/loginImage.svg";
import { styled } from "@mui/material/styles";

export default function UserProfile() {
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

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  const [values, setValues] = React.useState({
    amount: "",
    password: "",
    weight: "",
    weightRange: "",
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };
  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <div
      style={{
        background: COLORS.primary1,
      }}
    >
      <Container component="main" maxWidth="sm">
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
          <Avatar
            sx={{
              m: 1,
              bgcolor: COLORS.primary2,
              height: "200px",
              width: "200px",
            }}
          >
            <LockOutlinedIcon />
          </Avatar>

          <Box component="form" noValidate sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <CssTextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
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
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
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
              </Grid>
              <Grid item xs={12}>
                <CssTextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoFocus
                  autoComplete="email"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <p style={{ color: COLORS.white }}> jklu.edu.in </p>
                      </InputAdornment>
                    ),
                    style: {
                      color: COLORS.white,
                    },
                  }}
                />
              </Grid>

              <Grid item xs={12}>
                <CssTextField
                  required
                  fullWidth
                  id="aboutyou"
                  label="About You"
                  name="aboutyou"
                  multiline
                  rows={6}
                  InputProps={{
                    style: {
                      color: COLORS.white,
                    },
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <CssTextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  // type={values.showPassword ? "text" : "password"}
                  // value={values.password}
                  // onChange={handleChange("password")}
                  autoFocus
                  id="password"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                          sx={{ color: "white" }}
                        >
                          {values.showPassword ? (
                            <VisibilityOff />
                          ) : (
                            <Visibility />
                          )}
                        </IconButton>
                      </InputAdornment>
                    ),

                    style: {
                      color: COLORS.white,
                    },
                  }}
                />
              </Grid>
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
