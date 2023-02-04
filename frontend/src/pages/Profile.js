import React from 'react'
import { Box, Typography, Button, Grid} from "@mui/material";
import { Link } from "react-router-dom";
import LocationOnIcon from '@mui/icons-material/LocationOn';

const Profile = () => {
  return (
    <Box sx={{ mt: 10 , mx: 10 }}>
        
        <Box sx={{ display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
            }} >
            {/* User Info */}
            <Box mr={15} sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                {/* User picture */}
                <Box>
                    <Box sx={{
                        width: 270,
                        height: 270,
                        backgroundColor: '#C9AEED',
                        borderRadius: 50,
                    }}/>
                </Box>
                {/* User name, description and location */}
                <Box mt={3} sx={{ display: 'flex', 
                                    flexDirection: 'column', 
                                    justifyContent: 'space-around', 
                                    
                }} >
                    <Typography variant='h3' sx={{ fontWeight: 'bold'}}>Dese Elumaro</Typography>
                    <Box mt={1} sx={{display: 'flex', alignItems: 'center'}}>
                        <LocationOnIcon />
                        <Typography ml={1} mt={1} variant='h6'>Durham, NC</Typography>
                    </Box>
                    <Typography variant='h6' mt={1}>Anime Lover, Xiao's mother</Typography>
                </Box>
                {/* User interests */}
                <Grid container mt={3} rowSpacing={2} sx={{
                    display: 'flex',
                    flexDirection: 'column',
                }}>
                    <Grid item>
                        <Button variant='contained'>Content Creation</Button>
                    </Grid>

                    <Grid item>
                        <Button variant='contained'>Youtube</Button>
                    </Grid>
                    
                    
                </Grid>
            </Box>


            {/* Experience and Skills */}
            <Box sx={{ display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-evenly',
            }} >
                {/* Experience */}
                <Box>
                    <Typography variant='h3' mb={2} sx={{ fontWeight: 'bold'}}>Experience</Typography>
                    <Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, omnis rerum repellat eum perferendis corrupti possimus nobis similique veniam aliquid ab incidunt alias ratione? Mollitia commodi maiores saepe cum in! <br /> <br />
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt molestias accusamus soluta sapiente cumque vero omnis error eligendi ipsa nisi ipsam qui quia alias repudiandae, maiores, officia ex illo ducimus?
                    </Typography>
                </Box>
                {/* Skills */}
                <Box>
                    <Typography variant='h3' mb={2} sx={{ fontWeight: 'bold'}}>Skills</Typography>
                    <Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus tempora numquam dolores error nesciunt blanditiis, vitae architecto ea quam at possimus rerum dicta natus ab fuga eum fugit voluptate. Expedita?</Typography>
                </Box>
            </Box>
        </Box>
        
    </Box>
  )
}

export default Profile