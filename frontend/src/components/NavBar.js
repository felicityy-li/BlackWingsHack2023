import React from 'react'
import {
    AppBar,
    Toolbar,
    Button,
    makeStyles,
    Stack, 
    Box
  } from "@material-ui/core";
import brand_logo from "../assets/brand_logo.png";
import { useTheme } from '@material-ui/core/styles';

const Navbar = () => {
    const theme = useTheme();
    const isAuth = false
    const userType = "Job Poster"
  return (
    <Box sx={{ flexGrow: 1 }}>
        <AppBar position="fixed" style={{ background: '#ffffff' }} >
        <Toolbar sx={{ justifyContent: "space-between" }}>
        <img style={{ height: 50, width: 200}} src={brand_logo} alt="Logo" />
        
        {isAuth ? (
            userType === "Job Poster" ? (
                <>
                    <Stack direction="row" spacing={1.5} >
                        <Button color="secondary">Add Jobs</Button>
                        <Button color="secondary">My Jobs</Button>
                        <Button color="secondary">Business Profile</Button>
                        <Button sx={{color: "#f44336"}}>Logout</Button>
                    </Stack>
                </>
            ) : (
                <>
                    <Stack direction="row" spacing={1.5} >
                    <Button color="secondary">Job Postings</Button>
                    <Button color="secondary">Application Status</Button>
                    <Button color="secondary">Profile</Button>
                    <Button sx={{color: "#f44336"}}>Logout</Button>
                    </Stack>
                    
                </>
            )
        ) : (
            <>
                <Stack direction="row" spacing={1.5} >
                <Button color="secondary">Login</Button>
                <Button color="secondary">Register</Button>
                </Stack>
                
                </>
        )
        }
        </Toolbar>
    </AppBar>
    </Box>
    
  )
}

export default Navbar