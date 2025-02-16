const express = require("express");
const app = express();

// Set PORT to use the environment variable (Cloud Run requires this)
const PORT = process.env.PORT || 8080;

app.get("/", (req, res) => {
  res.send("Hello from Cloud Run!");
});

// Start the server on the correct port
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
