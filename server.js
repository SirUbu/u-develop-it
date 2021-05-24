// require dependencies
const express = require('express');

// establish port and express server
const PORT = process.env.PORT || 3001;
const app = express();

// express middleware
app.use(express.urlencoded({ extended:false }));
app.use(express.json());

// Default response for any other request (Not Found)
app.use((req, res) => {
    res.status(404).end();
});

// initialize server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});