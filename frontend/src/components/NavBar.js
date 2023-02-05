import React from "react";
import {
  AppBar,
  Toolbar,
  Button,
  makeStyles,
  Stack,
  Box,
} from "@material-ui/core";
import brand_logo from "../assets/brand_logo.png";
import { useNavigate } from "react-router-dom";
import { useTheme } from "@material-ui/core/styles";

const Navbar = ({ isAuth, userType }) => {
  let history = useNavigate();
  const theme = useTheme();
  const handleClick = (location) => {
    console.log(location);
    history(location);
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" style={{ background: "#ffffff" }}>
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <img style={{ height: 50, width: 200 }} src={brand_logo} alt="Logo" />

          {isAuth ? (
            userType === "Job Poster" ? (
              <>
                <Stack direction="row" spacing={1.5}>
                  <Button
                    color="secondary"
                    onClick={() => handleClick("/create-posting")}
                  >
                    Add Jobs
                  </Button>

                  <Button
                    sx={{ color: "#f44336" }}
                    onClick={() => handleClick("/")}
                  >
                    Logout
                  </Button>
                </Stack>
              </>
            ) : (
              <>
                <Stack direction="row" spacing={1.5}>
                  <Button
                    color="secondary"
                    onClick={() => handleClick("/jobboard")}
                  >
                    Job Board
                  </Button>
                  <Button
                    color="secondary"
                    onClick={() => handleClick("/profile")}
                  >
                    Profile
                  </Button>
                  <Button
                    sx={{ color: "#f44336" }}
                    onClick={() => handleClick("/")}
                  >
                    Logout
                  </Button>
                </Stack>
              </>
            )
          ) : (
            <>
              <Stack direction="row" spacing={1.5}>
                <Button color="secondary" onClick={() => handleClick("/")}>
                  Login
                </Button>
                <Button
                  color="secondary"
                  onClick={() => handleClick("/signup")}
                >
                  Register
                </Button>
              </Stack>
            </>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
