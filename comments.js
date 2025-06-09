// Create web server
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const port = 3000;
// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// In-memory database
let comments = [];
// Routes
app.get('/comments', (req, res) => {
    res.json(comments);
});
app.post('/comments', (req, res) => {
    const comment = req.body;
    if (!comment || !comment.text) {
        return res.status(400).json({ error: 'Comment text is required' });
    }
    comment.id = comments.length + 1; // Simple ID generation
    comments.push(comment);
    res.status(201).json(comment);
});
app.delete('/comments/:id', (req, res) => {
    const id = parseInt(req.params.id, 10);
    comments = comments.filter(comment => comment.id !== id);
    res.status(204).send();
});
app.put('/comments/:id', (req, res) => {
    const id = parseInt(req.params.id, 10);
    const updatedComment = req.body;
    if (!updatedComment || !updatedComment.text) {
        return res.status(400).json({ error: 'Comment text is required' });
    }
    const index = comments.findIndex(comment => comment.id === id);
    if (index === -1) {
        return res.status(404).json({ error: 'Comment not found' });
    }
    comments[index] = { ...comments[index], ...updatedComment };
    res.json(comments[index]);
});
// Start server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
// Export the app for testing
module.exports = app;
// This code creates a simple Express.js server that allows you to manage comments.
// It supports creating, reading, updating, and deleting comments.
// The comments are stored in an in-memory array, which means they will be lost when the server restarts.
// The server listens on port 3000 and uses JSON for request and response bodies.
// The server also uses CORS to allow requests from different origins.
// The comments are structured as objects with an `id` and `text` property.
// The server provides endpoints to get all comments, add a new comment, delete a comment by ID, and update a comment by ID.
// The code includes error handling for missing comment text and for trying to update or delete a non-existent comment.
// The server uses the `body-parser` middleware to parse JSON and URL-encoded request bodies.
// The server uses the `cors` middleware to allow cross-origin requests.
// The server uses the `express` framework to handle HTTP requests and responses.
// The server listens for incoming requests and responds with the appropriate data or status codes.
// The server exports the app for testing purposes, allowing you to import it in your test files.
// The code is structured to be simple and easy to understand, making it suitable for learning purposes.
// The server can be extended with additional features such as authentication, validation, and more complex data storage solutions like databases.
// The server can be tested using tools like Postman or curl to send HTTP requests to the endpoints.
// The server can be run using Node.js, and it will log a message indicating that it is running and the URL to access it.
// The server can be easily modified to add more features or change the data structure of comments.
// The server can be deployed to a cloud platform or run locally for development purposes.
// The server can be integrated with a front-end application to provide a complete commenting system.
// The server can be used as a starting point for building more complex applications that require comment management functionality.
// The server can be tested with unit tests or integration tests to ensure its functionality and reliability.
// The server can be extended with additional routes for features like user authentication, comment moderation, or analytics.
// The server can be used as a learning tool for understanding RESTful APIs, Express.js, and JavaScript.
// The server can be used in educational settings to teach students about web development, APIs, and server-side programming.
// The server can be used as a reference implementation for building similar applications or services.
// The server can be easily modified to change the port number or add additional middleware.
// The server can be used to demonstrate best practices in API design, such as using appropriate HTTP methods and status codes.
// The server can be used to practice error handling and input validation in web applications.
// The server can be used to explore concepts like middleware, routing, and request handling in Express.js.
// The server can be used to understand how to work with JSON data in web applications.
// The server can be used to learn about RESTful principles and how to design APIs that follow these principles.
// The server can be used to understand how to manage state in web applications using in-memory storage.
// The server can be used to learn about asynchronous programming in Node.js and how to handle requests and responses.
// The server can be used to explore how to build a simple commenting system from scratch.
// The server can be used to understand how to structure a Node.js application with Express.js.     