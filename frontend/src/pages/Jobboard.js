import React, { useState } from "react";

import {
  Typography,
  Container,
  CardContent,
  Card,
  Stack,
  Button,
  Select,
} from "@mui/material";
import NearMeOutlinedIcon from "@mui/icons-material/NearMeOutlined";
import Navbar from "../components/NavBar";

const postings = [
  {
    title: "Receptionist",
    city: "Brooklyn",
    state: "NY",
    exchange: "4 hours/week for unlimited painting classes",
    description:
      "We are seeking a professional and friendly receptionist to join our team. The receptionist will be responsible for welcoming visitors, answering phone calls, and providing administrative support to our team. \n \n Key Responsibilities: \n • Greet visitors and clients in a warm and friendly manner \n • Answer incoming phone calls and transfer them to the appropriate person or department \n • Manage incoming and outgoing mail and packages \n • Schedule appointments and maintain calendars for management \n • Manage the company's main email inbox and respond to inquiries in a timely manner \n • Keep the reception area clean, organized, and well-stocked \n • Provide administrative support to the team as needed \n • Maintain confidentiality and security of sensitive information",
    applied: false,
  },
  {
    title: "Front Desk",
    city: "Brooklyn",
    state: "NY",
    exchange: "4 hours/week for 2 yoga classes",
    description:
      "We are looking for a front desk associate to join our yoga center and help provide an excellent experience for our members and guests. The ideal candidate will be friendly, organized, and knowledgeable about yoga and wellness practices. \n \n Key Responsibilities: \n • Greet and assist members and guests upon arrival \n • Manage incoming calls and customer inquiries \n • Schedule and confirm appointments and class reservations \n • Process payments and handle cash transactions accurately \n • Maintain a clean and organized front desk area \n • Provide information about yoga classes and services offered \n • Assist with the preparation and setup of yoga classes and events \n • Maintain accurate and up-to-date member information in the database",
    applied: false,
  },
  {
    title: "Test Proctor",
    city: "Flushing",
    state: "NY",
    exchange: "6 hours/week for 2 SAT preparatory classes",
    description:
      "• Oversee and monitor students during standardized test-taking sessions \n • Ensure the security and confidentiality of test materials and results \n • Provide assistance and answer questions from students during the test  \n • Ensure that test instructions are followed by all students \n • Maintain accurate records of test scores and student informatio \n • Follow strict procedures for handling and storing test materials",
    applied: false,
  },
  {
    title: "Front Desk",
    city: "Manhattan Chinatown",
    state: "NY",
    exchange: "15 hours/week for 2 2-hour classes/week",
    description:
      "We are looking for a front desk associate to join our coding bootcamp and help provide an excellent experience for our students and visitors. The ideal candidate will be friendly, organized, and knowledgeable about technology and coding practices. \n \n Key Responsibilities: \n • Greet and assist students and visitors upon arrival \n • Manage incoming calls and customer inquiries \n • Schedule and confirm appointments and class reservations \n • Process payments and handle cash transactions accurately \n • Maintain a clean and organized front desk area \n • Provide information about coding classes and services offered \n • Assist with the preparation and setup of coding classes and events \n • Maintain accurate and up-to-date student information in the database",
    applied: false,
  },
  {
    title: "Social Media Assistant",
    city: "Manhattan",
    state: "NY",
    exchange: "10 hours/week for 1 class/week",
    description:
      "We are looking for a creative and enthusiastic individual to join our team as a social media assistant for our dance studio. The ideal candidate will be responsible for managing and growing our online presence, creating engaging content, and promoting the studio through social media channels. \n \n Key Responsibilities: \n • Develop and implement a comprehensive social media strategy to increase visibility and engagement \n • Create and curate high-quality, visually appealing content for social media channels, including photographs and videos of dance classes and events \n • Regularly post updates and interact with followers on social media platforms, including Facebook, Instagram, and Twitter \n • Monitor and respond to comments and messages from followers \n • Track and analyze the performance of social media campaigns and make recommendations for improvement \n • Stay up-to-date with the latest trends and best practices in social media marketing \n • Collaborate with the studio’s marketing team to integrate social media efforts into overall marketing initiatives",
    applied: false,
  },
];
const JobCard = ({ title, city, state, exchange, description }) => {
  const [applied, setApplied] = useState(false);
  return (
    <Card sx={{ width: "100%", p: 3 }}>
      <CardContent>
        <Stack spacing={5}>
          <Stack spacing={2}>
            <Typography
              sx={{ fontWeight: "bold" }}
              color="primary"
              variant={"h6"}
            >
              {title}
            </Typography>

            <Stack direction="row" spacing={1.5} alignItems={"center"}>
              <NearMeOutlinedIcon color="secondary" />
              <Typography variant="subtitle1" color="secondary">
                {city}, {state}
              </Typography>
            </Stack>
            <Typography color="#424242" variant="caption">
              {exchange}
            </Typography>
            <Typography variant="body2" style={{ whiteSpace: "pre-line" }}>
              {description}
            </Typography>
          </Stack>
          {!applied ? (
            <Button
              color="secondary"
              sx={{ width: "20%" }}
              variant="contained"
              onClick={() => setApplied(true)}
            >
              Apply
            </Button>
          ) : (
            <Button color="secondary" sx={{ width: "20%" }} variant="outlined">
              Applied
            </Button>
          )}
        </Stack>
      </CardContent>
    </Card>
  );
};
const Jobboard = () => {
  const [applied, setApplied] = useState(false);
  return (
    <Container
      sx={{ mt: 5 }}
      maxWidth="100vw"
      style={{ background: "#f0ebf7" }}
    >
      <Navbar isAuth={true} userType={"Job Seeker"} />
      <Stack sx={{ pt: 10 }} spacing={3} justifyContent="flex-start">
        {postings.map((el) => (
          <JobCard
            title={el.title}
            city={el.city}
            state={el.state}
            exchange={el.exchange}
            description={el.description}
          />
        ))}
      </Stack>
    </Container>
  );
};

export default Jobboard;
