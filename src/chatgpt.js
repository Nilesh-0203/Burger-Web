// - Build a blog application end to end with modules such as login, sign up, new  post addition deletion updation, search etc.

// Create a Node.js application
const express = require("express");
const app = express();

// Create a database connection
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/blogapp", { useNewUrlParser: true });
let db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  console.log("Connected to MongoDB");
});

// Create a Schema for blog posts
const blogPostSchema = new mongoose.Schema({
  title: String,
  body: String,
  createdAt: Date,
  updatedAt: Date,
});

// Create a model from the Schema
const BlogPost = mongoose.model("BlogPost", blogPostSchema);

// Create routes for the application

// Login route

app.get("/login", (req, res) => {
  res.send("Login page");
});

// Signup route

app.get("/signup", (req, res) => {
  res.send("Signup page");
});

// New post route

app.post("/newpost", (req, res) => {
  let newPost = new BlogPost({
    title: req.body.title,
    body: req.body.body,
    createdAt: new Date(),
    updatedAt: new Date(),
  });

  newPost.save((err) => {
    if (err) return handleError(err);

    res.send("New post added successfully!");
  });
});
