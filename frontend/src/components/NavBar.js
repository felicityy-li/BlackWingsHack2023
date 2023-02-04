import * as React from 'react';
import {AppBar, Toolbar, Box, Button, Typography, Menu, MenuItem, Container} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import brand_logo from "../assets/brand_logo.png"

const applicantPages = ['Job postings','Profile','Logout']
const businessPages = ['Add jobs', 'Applicants', "Logout"]

const Navbar = () => {
    const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" style={{ background: '#ffffff' }} >
        <Container maxWidth="xl">
            <Toolbar disableGutters>
            
            <img style={{ height: 50}} src={brand_logo} alt="Logo" />
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {applicantPages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'primary', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>
            </Toolbar>
        </Container>
    </AppBar>
    </Box>
    
  )
}

export default Navbar