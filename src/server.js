const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;

// Define the /api route
app.get('/api', (req, res) => {
    res.json({ message: "API is working!" });
});

// Catch-all route (optional)
app.get('*', (req, res) => {
    res.status(404).send('Route not found');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
