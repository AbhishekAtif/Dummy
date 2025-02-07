const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/api/dummy', (req, res) => {
    res.json({ message: 'This is a dummy API response' });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});