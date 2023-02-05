import React, { useState, useEffect } from "react";
import {
  Container,
  IconButton,
  Typography,
  Box,
  Stack,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Avatar,
  Chip,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import Navbar from "../components/NavBar";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CircleIcon from "@mui/icons-material/Circle";
import EditIcon from "@mui/icons-material/Edit";
export default function Profile() {
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
    setUserInfo({
      profilePicture:
        "https://st3.depositphotos.com/7486768/17806/v/600/depositphotos_178065822-stock-illustration-profile-anonymous-face-icon-gray.jpg",
      name: { firstName: "Divya", lastName: "Ramaswamy" },
      location: { city: city, state: state },
      interests: interests,
      experience: [
        "Front Desk at Whiz Code Brooklyn",
        "Phone Assistant at NC State IT",
        "Student Ambassador at NC State",
      ],
      skills: [
        "Microsoft Office 365",
        "Notetaking",
        "Public Speaking",
        "Time Management",
        "Multitasking",
      ],
    });
  };

  const saveUserInfo = (name) => {
    setOpen(false);
  };

  /** Takes the values from the dialog box to update the user's profile */
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [interests, setInterests] = useState([]);

  const [userInfo, setUserInfo] = useState({
    profilePicture:
      "https://st3.depositphotos.com/7486768/17806/v/600/depositphotos_178065822-stock-illustration-profile-anonymous-face-icon-gray.jpg",
    name: { firstName: "Divya", lastName: "Ramaswamy" },
    location: { city: "Brooklyn", state: "NY" },
    interests: ["Art", "Gym", "Coding"],
    experience: [
      "Front Desk at Whiz Code Brooklyn",
      "Phone Assistant at NC State IT",
      "Student Ambassador at NC State",
    ],
    skills: [
      "Microsoft Office 365",
      "Notetaking",
      "Public Speaking",
      "Time Management",
      "Multitasking",
    ],
  });

  const randomColor = () => {
    let color = "rgb(60,124,169)";

    return color;
  };
  return (
    <Container sx={{ mt: 5 }} maxWidth="100vw">
      <Navbar isAuth={true} userType={"Job Seeker"} />
      <Stack
        sx={{ p: 5 }}
        fullWidth
        direction="row"
        spacing={20}
        justifyContent="center"
        alignItems="center"
      >
        <Stack
          spacing={3}
          sx={{ width: 200, pt: 10 }}
          direction="column"
          alignItems="center"
          justifyContent="center"
        >
          <Stack direction="row" justifyContent="end">
            <Typography color="#ffffff">PLEASE WORK PLEASEEE</Typography>
            <IconButton sx={{ width: 5 }} onClick={handleClickOpen}>
              <EditIcon />
            </IconButton>
          </Stack>
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
              <Stack spacing={2} sx={{ width: 400 }}>
                <Typography sx={{ fontWeight: "bold" }}>City</Typography>
                <TextField
                  autoFocus
                  margin="dense"
                  id="city"
                  placeholder={userInfo.location.city}
                  type="text"
                  fullWidth
                  variant="outlined"
                  onChange={(e) => setCity(e.target.value)}
                />
                <Typography sx={{ fontWeight: "bold" }}>State</Typography>
                <TextField
                  autoFocus
                  margin="dense"
                  id="state"
                  placeholder={userInfo.location.state}
                  type="text"
                  fullWidth
                  variant="outlined"
                  onChange={(e) => setState(e.target.value)}
                />
                <Typography sx={{ fontWeight: "bold" }}>Interests</Typography>
                <TextField
                  autoFocus
                  margin="dense"
                  id="interests"
                  placeholder={userInfo.interests}
                  type="text"
                  fullWidth
                  variant="outlined"
                  onChange={(e) => {
                    const arrOfInterests = e.target.value
                      .replace(/\s/g, "")
                      .split(",");
                    console.log(arrOfInterests);
                    setInterests(arrOfInterests);
                  }}
                />
              </Stack>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose}>Cancel</Button>
              <Button onClick={handleClose} autoFocus>
                Save
              </Button>
            </DialogActions>
          </Dialog>
          <Avatar src="/broken-image.jpg" sx={{ width: 150, height: 150 }} />
          <Typography align="center" variant="h4" sx={{ fontWeight: "bold" }}>
            {userInfo.name.firstName} {userInfo.name.lastName}
          </Typography>
          <Stack
            direction="row"
            spacing={0.5}
            alignItems="center"
            justifyContent="flex-start"
          >
            <LocationOnIcon style={{ color: "#F15C5C" }} />
            <Typography variant="h6">
              {userInfo.location.city}, {userInfo.location.state}
            </Typography>
          </Stack>
          <Stack direction="row" spacing={0.5} justifyContent="flex-start">
            {userInfo.interests.map((data) => {
              return (
                <Chip
                  style={{ backgroundColor: randomColor(), color: "#ffffff" }}
                  label={data}
                />
              );
            })}
          </Stack>
        </Stack>
        <Stack
          direction="column"
          spacing={5}
          alignItems="flex-start"
          justifyContent="flex-start"
        >
          <Stack spacing={2}>
            <Stack direction="row" spacing={3} alignItems="center">
              <Typography sx={{ fontWeight: "bold" }} variant="h4">
                Experience
              </Typography>
              <IconButton sx={{ width: 5 }}>
                <EditIcon onClick={handleClickOpen} />
              </IconButton>
              <Dialog>
                <DialogTitle id="alert-dialog-title">
                  {"Update Experience"}
                </DialogTitle>
                <DialogContent>
                  <Stack spacing={2} sx={{ width: 400 }}>
                    <Typography sx={{ fontWeight: "bold" }}>
                      Experience
                    </Typography>
                    <TextField
                      autoFocus
                      margin="dense"
                      id="experience"
                      placeholder={userInfo.experience}
                      type="text"
                      fullWidth
                      multiline
                      rows={7}
                      variant="outlined"
                    />
                  </Stack>
                </DialogContent>
                <DialogActions>
                  <Button onClick={handleClose}>Cancel</Button>
                  <Button onClick={handleClose} autoFocus>
                    Save
                  </Button>
                </DialogActions>
              </Dialog>
            </Stack>

            <List sx={{ spacing: 0.5 }}>
              {userInfo.experience.map((data) => {
                return (
                  <ListItem>
                    <ListItemIcon>
                      <CircleIcon sx={{ width: 5 }} />
                    </ListItemIcon>
                    <ListItemText primary={data} />
                  </ListItem>
                );
              })}
            </List>
          </Stack>
          <Stack spacing={2}>
            <Stack direction="row" spacing={3} alignItems="center">
              <Typography sx={{ fontWeight: "bold" }} variant="h4">
                Skills
              </Typography>
              <IconButton sx={{ width: 5 }}>
                <EditIcon />
              </IconButton>
            </Stack>
            <Stack direction="row" spacing={0.5} justifyContent="flex-start">
              {userInfo.skills.map((data) => {
                return <Chip label={data} />;
              })}
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Container>
  );
}
