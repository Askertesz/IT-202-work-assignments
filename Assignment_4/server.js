const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

app.use(cors());

app.get('/api/data', (req, res) => {
  res.json({
    message: 'Hello from the Node.js API!',
    timestamp: new Date().toISOString(),
    data: [
      { id: 1, name: 'Item 1' },
      { id: 2, name: 'Item 2' }
    ]
  });
});

app.listen(PORT, () => {
  console.log(`Node.js API server running on http://localhost:${PORT}`);
});