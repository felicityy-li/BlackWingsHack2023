import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  TextField,
  Button,
  Stack,
  Typography,
  Select,
  Box,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

export const JobForm = ({ handleClose }) => {
  // each input has a state variable
  const [jobPosting, setJobPosting] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    //TODO: the code here should send the data to the DB
    navigate(-1); // TODO: chage this once we have a profile in place
    // handleClose();
  };

  const options = ["Job Seeker", "Job Poster"];

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Grid
          container
          rowSpacing={2}
          justifyContent="center"
          alignItems="center"
        >
          <Grid lg={3}>
            <Typography variant="h5" sx={{ fontWeight: "bold" }}>
              Job Title:
            </Typography>
          </Grid>
          <Grid lg={8}>
            <TextField
              name="Title"
              variant="outlined"
              required
              value={jobPosting}
              onChange={(e) => setJobPosting(e.target.value)}
            />
          </Grid>

          <Grid lg={3}>
            <Typography variant="h5" sx={{ fontWeight: "bold" }}>
              Location:
            </Typography>
          </Grid>
          <Grid lg={8}>
            <TextField
              name="Title"
              variant="outlined"
              required
              value={jobPosting}
              onChange={(e) => setJobPosting(e.target.value)}
            />
          </Grid>

          <Grid lg={3}>
            <Typography variant="h5" sx={{ fontWeight: "bold" }}>
              Exchange Currency:
            </Typography>
          </Grid>
          <Grid lg={8}>
            <TextField
              name="Title"
              variant="outlined"
              label="e.g. 4 hours/week for unlimited classes"
              required
              value={jobPosting}
              onChange={(e) => setJobPosting(e.target.value)}
            />
          </Grid>

          <Grid lg={3}>
            <Typography variant="h5" sx={{ fontWeight: "bold" }}>
              Job Description:
            </Typography>
          </Grid>
          <Grid lg={8}>
            <TextField
              name="Title"
              variant="outlined"
              required
              multiline
              rows={6}
              value={jobPosting}
              onChange={(e) => setJobPosting(e.target.value)}
            />
          </Grid>
          <Grid lg={3}></Grid>
          <Grid lg={8}>
            <Button type="submit" variant="contained" color="secondary">
              Create Posting
            </Button>
          </Grid>
        </Grid>
      </form>
    </>
  );
};
