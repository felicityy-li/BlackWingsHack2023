import React from "react";
import { Stack, Typography, Container, Button, TextField } from "@mui/material";
import { Link } from "react-router-dom";
import icon_logo from "../assets/icon_logo.png";
const LoginForm = () => {
  return (
    <form>
      <Stack spacing={3}>
        <Stack spacing={1.5}>
          <TextField name="email" label="Email address" variant="outlined" />
          <TextField name="password" label="Password" variant="outlined" />
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
