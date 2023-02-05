import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import {
  TextField,
  Button,
  Stack,
  Typography,
  Select,
  MenuItem,
} from "@mui/material";
import axios from "axios";

export const SignUp = ({ handleClose }) => {
  // each input has a state variable
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState("Job Seeker");
  const [linkedTo, setLinkedTo] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    //TODO: the code here should send the data to the DB
    console.log(firstName, lastName, userType);
    // navigate(-1);
    if (userType === "Job Seeker") setLinkedTo("/ProfilePage");
    else setLinkedTo("/create-posting");
    try {
      const result = await axios
        .post("http://localhost:8000/newUser", {
          firstName: firstName,
          lastName: lastName,
          email: email,
          password: password,
          userType: userType,
        })
        .then(function (response) {
          console.log(response);
        })
        .catch(function (err) {
          console.log(err);
        });
      console.log(result.response.data);
    } catch (e) {
      console.error(e.response.data);
    }
    // handleClose()
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
            <Button
              type="submit"
              variant="contained"
              color="primary"
              onClick={handleSubmit}
            >
              <Link to={linkedTo}>Signup</Link>
            </Button>
          </Stack>
        </Stack>
      </form>
    </>
  );
};
