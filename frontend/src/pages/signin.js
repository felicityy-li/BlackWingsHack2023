import React, { useState } from "react";
import {
  Stack,
  Typography,
  Container,
  Button,
  TextField,
  InputAdornment,
  IconButton,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import icon_logo from "../assets/icon_logo.png";
const LoginForm = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    //TODO: the code here should send the data to the DB
    navigate("/profile"); // TODO: chage this once we have a profile in place
    // handleClose();
  };
  return (
    <form onSubmit={handleSubmit}>
      <Stack spacing={3}>
        <Stack spacing={1.5}>
          <TextField
            name="email"
            label="Email address"
            variant="outlined"
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            name="password"
            label="Password"
            variant="outlined"
            onChange={(e) => setPassword(e.target.value)}
            type={showPassword ? "text" : "password"}
            InputProps={{
              endAdornment: (
                <InputAdornment>
                  <IconButton
                    onClick={() => {
                      setShowPassword(!showPassword);
                    }}
                  >
                    {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </Stack>

        <Button
          fullWidth
          color="secondary"
          size="large"
          type="submit"
          variant="contained"
        >
          Login
        </Button>
      </Stack>
    </form>
  );
};

export default function SignIn() {
  // create state variables for each input

  return (
    <Container sx={{ mt: 5 }} maxWidth="sm">
      <Stack spacing={5}>
        <Stack sx={{ width: "100%" }} direction="column" alignItems="center">
          <img style={{ height: 100, width: 100 }} src={icon_logo} alt="Logo" />
        </Stack>
        <Stack spacing={2} sx={{ mb: 5, position: "relative" }}>
          <Typography sx={{ fontWeight: "bold" }} variant="h4">
            Sign in to FairExchange
          </Typography>
          <Stack direction="row" spacing={0.5}>
            <Typography variant="body2">New user?</Typography>
            <Link to="/signup">Create an account</Link>
          </Stack>
          <LoginForm />
        </Stack>
      </Stack>
    </Container>
  );
}
