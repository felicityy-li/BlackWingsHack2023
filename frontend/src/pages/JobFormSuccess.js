import { Typography, Container, Stack } from '@mui/material'
import React from 'react'
import Navbar from '../components/NavBar'

const JobFormSuccess = () => {
  return (
    <>
      <Container sx={{ mt: 5}} >
        <Navbar isAuth={true} userType={"Job Poster"} />
        <Stack direction="row" sx={{justifyContent: "space-between"}} spacing={8}>
        <Stack sx={{ pt: 40, width: 'auto'}} spacing={3} justifyContents="center" alignItems="center">
          <Typography sx={{ fontWeight: "bold" }} variant="h4">
            You have successfully created a new job posting!
          </Typography>
          <Typography variant="body1">
            We will send you an email whenever we receive an application for this job posting.
          </Typography>

        </Stack>
        <img style={{ height: "100vh", width:'auto'}} src={"https://images.unsplash.com/photo-1528732263440-4dd1a18a4cc2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"} alt="Logo" />
        </Stack>


      </Container>

    </>
  )
}

export default JobFormSuccess