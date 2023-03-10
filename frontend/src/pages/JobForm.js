import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  TextField,
  Button,
  Stack,
  Typography,
  Select,
  Box,
  Container,
  MenuItem,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import Navbar from "../components/NavBar";

const Form = () => {
  const navigate = useNavigate();
  const [jobTitle, setJobTitle] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [exchange, setExchange] = useState("");
  const [jobDescription, setJobDescription] = useState("");
  const options = [
    "Alaska",
    "Alabama",
    "Arkansas",
    "American Samoa",
    "Arizona",
    "California",
    "Colorado",
    "Connecticut",
    "District of Columbia",
    "Delaware",
    "Florida",
    "Georgia",
    "Guam",
    "Hawaii",
    "Iowa",
    "Idaho",
    "Illinois",
    "Indiana",
    "Kansas",
    "Kentucky",
    "Louisiana",
    "Massachusetts",
    "Maryland",
    "Maine",
    "Michigan",
    "Minnesota",
    "Missouri",
    "Mississippi",
    "Montana",
    "North Carolina",
    "North Dakota",
    "Nebraska",
    "New Hampshire",
    "New Jersey",
    "New Mexico",
    "Nevada",
    "New York",
    "Ohio",
    "Oklahoma",
    "Oregon",
    "Pennsylvania",
    "Puerto Rico",
    "Rhode Island",
    "South Carolina",
    "South Dakota",
    "Tennessee",
    "Texas",
    "Utah",
    "Virginia",
    "Virgin Islands",
    "Vermont",
    "Washington",
    "Wisconsin",
    "West Virginia",
    "Wyoming",
  ];
  const handleSubmit = (e) => {
    e.preventDefault();
    //TODO: the code here should send the data to the DB
    navigate("/create-posting-success"); // TODO: chage this once we have a profile in place
    // handleClose();
  };
  return (
    <form onSubmit={handleSubmit}>
      <Stack spacing={5}>
        <Stack spacing={3}>
          <Stack
            direction="row"
            spacing={4}
            alignItems="center"
            sx={{ justifyContent: "space-between" }}
          >
            <Typography bold variant="h6">
              Job Title
            </Typography>
            <TextField
              style={{ width: 400 }}
              name="jobTitle"
              label="Job Title"
              variant="outlined"
              onChange={(e) => setJobTitle(e.target.value)}
            />
          </Stack>
          <Stack
            direction="row"
            spacing={4}
            alignItems="center"
            sx={{ justifyContent: "space-between" }}
          >
            <Typography bold variant="h6">
              City
            </Typography>
            <TextField
              style={{ width: 400 }}
              name="city"
              label="City"
              variant="outlined"
              onChange={(e) => setCity(e.target.value)}
            />
          </Stack>
          <Stack
            direction="row"
            spacing={4}
            alignItems="center"
            sx={{ justifyContent: "space-between" }}
          >
            <Typography bold variant="h6">
              State
            </Typography>
            <TextField
              style={{ width: 400 }}
              name="state"
              select
              defaultValue={options[0]}
              label="State"
              variant="outlined"
              onChange={(e) => setState(e.target.value)}
            >
              {options.map((option) => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </TextField>
          </Stack>
          <Stack
            direction="row"
            spacing={4}
            alignItems="center"
            sx={{ justifyContent: "space-between" }}
          >
            <Typography bold variant="h6">
              Exchange Currency
            </Typography>
            <TextField
              style={{ width: 500 }}
              name="exchange"
              placeholder="e.g. 4 hours/week for unlimited classes"
              variant="outlined"
              onChange={(e) => setExchange(e.target.value)}
            />
          </Stack>
          <Stack
            direction="row"
            spacing={4}
            alignItems="center"
            sx={{ justifyContent: "space-between" }}
          >
            <Typography bold variant="h6">
              Job Description
            </Typography>
            <TextField
              multiline
              rows={8}
              style={{ width: 435 }}
              name="description"
              label="Job Description"
              variant="outlined"
              onChange={(e) => setJobDescription(e.target.value)}
            />
          </Stack>
        </Stack>
        <Button
          fullWidth
          color="secondary"
          size="large"
          type="submit"
          variant="contained"
        >
          Create Job Posting
        </Button>
      </Stack>
    </form>
  );
};
const JobForm = ({ handleClose }) => {
  // each input has a state variable

  return (
    <>
      <Container sx={{ mt: 5 }}>
        <Navbar isAuth={true} userType={"Job Poster"} />
        <Stack
          direction="row"
          sx={{ justifyContent: "space-between" }}
          spacing={5}
        >
          <Stack
            sx={{ pt: 12, width: "auto" }}
            spacing={3}
            justifyContents="center"
          >
            <Typography sx={{ fontWeight: "bold" }} variant="h4">
              Add a Job Posting
            </Typography>
            <Form />
          </Stack>
          <img
            style={{ height: "100vh", width: "auto" }}
            src={
              "https://images.unsplash.com/photo-1528732263440-4dd1a18a4cc2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
            }
            alt="Logo"
          />
        </Stack>
      </Container>
    </>
  );
};

export default JobForm;
