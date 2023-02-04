import React from 'react'
import { Box, Typography, Container} from "@mui/material";
import { Link } from "react-router-dom";

const Profile = () => {
  return (
    <Container sx={{ mt: 5 }} maxWidth="sm">
        
        <Box>
            {/* User Info */}
            <Box>
                {/* User picture */}
                <Box></Box>
                {/* User name, description and location */}
                <Box></Box>
                {/* User interests */}
                <Box></Box>
            </Box>


            {/* Experience and Skills */}
            <Box>
                {/* Experience */}
                {/* Skills */}
            </Box>
        </Box>
        
    </Container>
  )
}

export default Profile