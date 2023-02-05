import React, { useState } from "react";
import IconButton from "@mui/material/IconButton";
import Grid from "@mui/material/Unstable_Grid2";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";

export default function UserProfilePage() {
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const saveUserInfo = (name) => {
    setOpen(false);
  };
  const [userInfo, setUserInfo] = useState({
    profilePicture:
      "https://st3.depositphotos.com/7486768/17806/v/600/depositphotos_178065822-stock-illustration-profile-anonymous-face-icon-gray.jpg",
    name: { firstName: "asdf", lastName: "ghj" },
    location: { city: "", state: "", country: "" },
    roles: [],
  });

  return (
    <div>
      <Box sx={{ width: "100%" }}>
        <Grid container rowSpacing={1} columnSpacing={2}>
          <Grid xs={3}>
            <IconButton aria-label="delete" onClick={handleClickOpen}>
              <img src={userInfo.profilePicture} alt="" />
            </IconButton>
            <Dialog
              open={open}
              onClose={handleClose}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
            >
              <DialogTitle id="alert-dialog-title">
                {"Update Profile"}
              </DialogTitle>
              <DialogContent>
                {/* <DialogContentText id="alert-dialog-description">
                  Let Google help apps determine location. This means sending
                  anonymous location data to Google, even when no apps are
                  running.
                </DialogContentText> */}
                <TextField
                  autoFocus
                  margin="dense"
                  id="name"
                  label="Email Address"
                  type="email"
                  fullWidth
                  variant="standard"
                />
              </DialogContent>
              <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Button onClick={handleClose} autoFocus>
                  Save
                </Button>
              </DialogActions>
            </Dialog>
            <Typography variant="h4" sx={{ fontWeight: "bold" }}>
              {userInfo.name.firstName}
            </Typography>
            <Typography variant="h4" sx={{ fontWeight: "bold" }}>
              {userInfo.name.lastName}
            </Typography>
            <Typography variant="h6">
              {userInfo.location.city}, {userInfo.location.state},
              {userInfo.location.country}
            </Typography>
          </Grid>
          <Grid xs={9}>asdf</Grid>
        </Grid>
      </Box>
    </div>
  );
}
