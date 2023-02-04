import React, { useState } from "react";
import {
  TextField,
  Button,
  Stack,
  Typography,
  Select,
  MenuItem,
} from "@mui/material";

export const SignUp = ({ handleClose }) => {
  // each input has a state variable
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    //TODO: the code here should send the data to the DB
    console.log(firstName, lastName, userType);
    handleClose();
  };

  const options = ["Job Seeker", "Job Poster"];

  return (
    <>
      <Typography
        sx={{ fontWeight: "bold", marginBottom: 2, marginTop: 2 }}
        variant="h4"
      >
        Sign Up
      </Typography>
      <form onSubmit={handleSubmit}>
        <Stack spacing={3}>
          <Stack spacing={1.5}>
            <TextField
              label="First Name"
              variant="filled"
              required
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <TextField
              label="Last Name"
              variant="filled"
              required
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
            <TextField
              label="Email"
              variant="filled"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              label="Password"
              variant="filled"
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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
            <Button variant="contained" onClick={handleClose}>
              Cancel
            </Button>
            <Button type="submit" variant="contained" color="primary">
              Signup
            </Button>
          </Stack>
        </Stack>
      </form>
    </>
  );
};
