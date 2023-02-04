import * as React from "react";
import ReactDOM from "react-dom/client";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import { SignUpContainer } from "./pages/SignUpContainer";

export default function App() {
  return (
    <Container>
      <SignUpContainer />
      <Box></Box>
    </Container>
  );
}
