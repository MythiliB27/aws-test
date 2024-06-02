const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 8000; // Use port 3000 if not specified

// Serve static files (your HTML file and script.js)
app.use(express.static(path.join(__dirname)));

// Define a route to serve the HTML file
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Handle GET request
app.get('/data', (req, res) => {
  // Your logic to handle the GET request
  // For example, you can send back JSON data
  res.json({ message: 'This is a GET request response' });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
