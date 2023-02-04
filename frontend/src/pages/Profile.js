import React from 'react'
import { Box, Typography, Container} from "@mui/material";
import { Link } from "react-router-dom";

const Profile = () => {
  return (
    <Box sx={{ mt: 10 , mx: 10 }}>
        
        <Box sx={{ display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
            }} >
            {/* User Info */}
            <Box>
                {/* User picture */}
                <Box></Box>
                {/* User name, description and location */}
                <Box>
                    <Typography variant='h3'>Dese Elumaro</Typography>
                    <Typography variant='p'>Anime Lover, Xiao's mother</Typography>
                    <Typography variant='p'>Durham, NC</Typography>
                </Box>
                {/* User interests */}
                <Box>
                    <Typography variant='h6'>Content Creation</Typography>
                    <Typography variant='h6'>Youtube</Typography>
                </Box>
            </Box>


            {/* Experience and Skills */}
            <Box sx={{ display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
            }} >
                {/* Experience */}
                <Box>
                    <Typography variant='h2'>Experience</Typography>
                    <Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, omnis rerum repellat eum perferendis corrupti possimus nobis similique veniam aliquid ab incidunt alias ratione? Mollitia commodi maiores saepe cum in!</Typography>
                </Box>
                {/* Skills */}
                <Box>
                    <Typography variant='h2'>Skills</Typography>
                    <Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus tempora numquam dolores error nesciunt blanditiis, vitae architecto ea quam at possimus rerum dicta natus ab fuga eum fugit voluptate. Expedita?</Typography>
                </Box>
            </Box>
        </Box>
        
    </Box>
  )
}

export default Profile