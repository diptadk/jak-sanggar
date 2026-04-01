const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Middleware for parsing JSON
app.use(express.json());

// Import routes
const route1 = require('./routes/route1'); // Update with actual routes
const route2 = require('./routes/route2'); // Update with actual routes

// Use routes
app.use('/api/route1', route1);
app.use('/api/route2', route2); // Update with actual paths

// Start server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
