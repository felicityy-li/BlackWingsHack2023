import React from 'react'
import NoteAddOutlinedIcon from '@mui/icons-material/NoteAddOutlined';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import { Box, Typography, Container} from "@mui/material";
import { Link } from "react-router-dom";

const Jobboard = () => {
  return (
    <Container sx={{ mt: 5 }} maxWidth="sm">
        <Typography variant='h2' sx={{fontWeight:'bold'}} mt={15} mb={7}>WELCOME DESE!</Typography>

        <Box sx={{ display:'flex', justifyContent: 'space-around', alignItems: 'center'}}>
            <Box sx={{ display:'flex', flexDirection:'column', justifyContent: 'space-between', alignItems: 'center', marginRight: 1}}>
                <Box sx={{
                        width: 200,
                        height: 200,
                        backgroundColor: '#C9AEED',
                        borderRadius: 50,
                        display: 'flex',
                        justifyContent: 'center',
                        flexDirection: 'column',
                        alignItems: 'center',
                }}>
                    <DescriptionOutlinedIcon sx={{ fontSize: 130 }}/>
                </Box>
                
                <Typography variant='h4'mt={5} sx={{ textDecoration:'underline', fontColor:'black', fontWeight: 'bold'}}>
                    Job Board
                </Typography>  
            </Box>
            <Box sx={{ 
                display:'flex', 
                flexDirection:'column', 
                justifyContent: 'space-between', 
                alignItems: 'center',
                marginLeft: 12 
                }}>
                    <Box sx={{
                        width: 200,
                        height: 200,
                        backgroundColor: '#878ACD',
                        borderRadius: 50,
                        display: 'flex',
                        justifyContent: 'center',
                        flexDirection: 'column',
                        alignItems: 'center',
                }}>
                    <NoteAddOutlinedIcon sx={{ fontSize: 130 }}/>
                </Box>
                <Typography variant='h4'mt={5} sx={{ textDecoration:'underline', fontColor:'black', fontWeight: 'bold'}}>
                    Create Posting
                </Typography>
            </Box>
        </Box>
    </Container>
  )
}

export default Jobboard