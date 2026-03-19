// Create Web Server
const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// In-memory storage for comments
let comments = [];

// Route to get all comments
app.get('/comments', (req, res) => {
    res.json(comments);
});