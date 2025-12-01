const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// A simple GET route for the homepage
app.get('/', (req, res) => {
  res.send('Hello World! This is a simple API response.');
});

// Start the server and listen on the defined port
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

let items = [{ id: 1, name: 'Item 1' }, { id: 2, name: 'Item 2' }];

app.get('/api/items', (req, res) => {
  res.json(items); // Responds with JSON data
});