const express = require('express');
const app = express();

const PORT = process.env.PORT || 8080;

app.get('/api', (req, res) => {
    res.send('API is working!');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
