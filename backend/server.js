const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
// Importing Models Student and Course from model.js
const { User, Job } = require("./models/model");
require("dotenv").config();
const port = process.env.PORT || 8000;

const random = require("./services/UserAuthenticationService");

// SETUP
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("db connected");
  })
  .catch((err) => {
    console.error(err);
  });

app.use(cors());
app.use(express.json());

/** Base url for testing */
app.get("/", (req, res) => {
  res.send("base hit!");
});

/** Get a list of all jobs */
app.get("/jobs", (req, res) => {
  Job.findOne()
    .then((data) => {
      console.log("Jobs:", data);
      res.send(data);
    })
    .catch((error) => {
      console.log(error);
      res.status(400).send("This is an error");
    });
});

/** Find a user based on a password/email. Expected request body: {email: email, password: pwd} */
app.get("/newUser", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  User.findOne({ email: { email }, password: { password } })
    .then((data) => {
      res.send(data);
    })
    .catch((error) => {
      console.log(error);
      res.status(400).send("Error with user info retrieval");
    });
});

/** Strict request body. Used to add new user to DB. */
app.post("/newUser", (req, res, next) => {
  try {
    const body = req.body;
    const isJobSeeker = body.userType === "Job Seeker" ? 1 : 0;
    console.log(body.firstName);
    const newUser = new User({
      firstName: body.firstName,
      lastName: body.lastName,
      email: body.email,
      password: body.password,
      isJobSeeker: isJobSeeker,
    });
    newUser.save();
    // ((err, res) => {
    //   if (err) {
    //     res.status(400).send("Error with saving new user");
    //   } else {
    //     res.send("success");
    //   }
    // });
  } catch (e) {
    console.log(e);
  }
});

app.listen(port, () => {
  console.log(`Server started on port: ${port}`);
});
