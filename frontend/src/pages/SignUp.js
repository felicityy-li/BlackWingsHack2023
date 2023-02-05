import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  TextField,
  Button,
  Stack,
  Typography,
  Select,
  MenuItem,
  Link,
  Container,
  InputAdornment,
  IconButton,
} from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import icon_logo from "../assets/icon_logo.png";

export const SignUp = ({ handleClose }) => {
  // each input has a state variable
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState("");
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const handleSubmit = (e) => {
    //TODO: the code here should send the data to the DB
    console.log(firstName, lastName, userType);
    if (userType === "Job Seeker"){
      navigate("/create-posting"); 
    } else {
      navigate("/profile"); 
    }
// TODO: chage this once we have a profile in place
    // handleClose();
  };

  const options = ["Job Seeker", "Job Poster"];

  return (
    <Container sx={{ mt: 5, pt: 15 }} maxWidth="sm">
      <Stack spacing={5}>
        <Stack sx={{ width: "100%" }} direction="column" alignItems="center">
          <img style={{ height: 100, width: 100 }} src={icon_logo} alt="Logo" />
        </Stack>
        <Stack spacing={2} sx={{ mb: 5, position: "relative" }}>
          <Typography sx={{ fontWeight: "bold" }} variant="h4">
            Create an account
          </Typography>
          <form onSubmit={handleSubmit}>
            <Stack spacing={3}>
              <Stack spacing={1.5}>
                <Stack direction={{ xs: "column", sm: "row" }} spacing={1.5}>
                  <TextField
                    label="First Name"
                    fullWidth
                    variant="outlined"
                    required
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                  <TextField
                    label="Last Name"
                    fullWidth
                    variant="outlined"
                    required
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </Stack>

                <TextField
                  label="Email"
                  variant="outlined"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <TextField
                  label="Password"
                  variant="outlined"
                  type={showPassword ? "text" : "password"}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment>
                        <IconButton
                          onClick={() => {
                            setShowPassword(!showPassword);
                          }}
                        >
                          {showPassword ? (
                            <VisibilityIcon />
                          ) : (
                            <VisibilityOffIcon />
                          )}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
                <TextField
                  select
                  label="User Type"
                  defaultValue={options[0]}
                  helperText="Please select your designation"
                  onChange={(e) => setUserType(e.target.value)}
                >
                  {options.map((option) => (
                    <MenuItem key={option} value={option}>
                      {option}
                    </MenuItem>
                  ))}
                </TextField>
              </Stack>

              <Stack direction="row" spacing={1}>
                <Button
                  size="large"
                  fullWidth
                  type="submit"
                  variant="contained"
                  color="secondary"
                >
                  Sign up
                </Button>
              </Stack>
              <Stack direction="row" spacing={0.5} justifyContent="end">
                <Typography variant="body2">
                  Already have an account?
                </Typography>
                <Link variant="body2" to="/">
                  Sign in
                </Link>
              </Stack>
            </Stack>
          </form>
        </Stack>
      </Stack>
    </Container>
  );
};
