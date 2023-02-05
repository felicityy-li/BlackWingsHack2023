import React from 'react'
import NoteAddOutlinedIcon from '@mui/icons-material/NoteAddOutlined';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import { Box, Grid, Typography, Container} from "@mui/material";
import { Link } from "react-router-dom";
import Navbar from '../components/NavBar';

const postings = [
    {
      title: "Receptionist",
      city: "Brooklyn",
      state: "NY",
      exchange: "4 hours/week for unlimited painting classes",
      description: 
      "We are seeking a professional and friendly receptionist to join our team. The receptionist will be responsible for welcoming visitors, answering phone calls, and providing administrative support to our team. \n Key Responsibilities: \n Greet visitors and clients in a warm and friendly manner \n Answer incoming phone calls and transfer them to the appropriate person or department \n Manage incoming and outgoing mail and packages \n Schedule appointments and maintain calendars for management \n Manage the company's main email inbox and respond to inquiries in a timely manner \n Keep the reception area clean, organized, and well-stocked \n Provide administrative support to the team as needed \n Maintain confidentiality and security of sensitive information"
    },
    {
        title: "Front Desk",
        city: "Brooklyn",
        state: "NY",
        exchange: "4 hours/week for 2 yoga classes",
        description: "We are looking for a front desk associate to join our yoga center and help provide an excellent experience for our members and guests. The ideal candidate will be friendly, organized, and knowledgeable about yoga and wellness practices. \n Key Responsibilities: \n Greet and assist members and guests upon arrival \n Manage incoming calls and customer inquiries \n Schedule and confirm appointments and class reservations \n Process payments and handle cash transactions accurately \n Maintain a clean and organized front desk area \n Provide information about yoga classes and services offered \n Assist with the preparation and setup of yoga classes and events \n Maintain accurate and up-to-date member information in the database",
      },
      {
        title: "Test Proctor",
        city: "Flushing",
        state: "NY",
        exchange: "6 hours/week for 2 SAT preparatory classes",
        description: "Oversee and monitor students during standardized test-taking sessions \n Ensure the security and confidentiality of test materials and results \n Provide assistance and answer questions from students during the test \n Ensure that test instructions are followed by all students \n Maintain accurate records of test scores and student informatio \n Follow strict procedures for handling and storing test materials",
      },
      {
        title: "Front Desk",
        city: "Manhattan Chinatown",
        state: "NY",
        exchange: "",
        description: "",
      },
      {
        title: "Profile",
        city: "",
        state: "",
        exchange: "",
        description: "",
      }
  ];
const jobCard = (title, city, state, exchange, description) => {

}

const Jobboard = () => {
  return (
    <Container sx={{ mt: 5 }} maxWidth="sm">
        <Navbar isAuth={true} userType={"Job Seeker"} />
        
    </Container>
  )
}

export default Jobboard