// Requiring module
const mongoose = require("mongoose");

// User Model Schema
const usersSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  password: String,
  isJobSeeker: Number,
});

// Job Model Schema
const jobsSchema = new mongoose.Schema({
  title: String,
  city: String,
  state: String,
  currency: String,
  description: String,
  email: String,
});

// Creating model objects
const User = mongoose.model("user", usersSchema);
const Job = mongoose.model("job", jobsSchema);

// Exporting our model objects
module.exports = {
  User,
  Job,
};
