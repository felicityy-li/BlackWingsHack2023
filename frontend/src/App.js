import * as React from "react";
import ReactDOM from "react-dom/client";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import { SignUpContainer } from "./pages/SignUpContainer";
import { Routes, Route } from "react-router-dom";
import SignIn from "./pages/signin";
import { JobForm } from "./pages/JobForm";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/signup" element={<SignUpContainer />} />
        <Route path="/create-posting" element={<JobForm />} />
      </Routes>
    </>
  );
}
