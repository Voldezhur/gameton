const express = require('express');

const app =  express();
app.use(express.json());

const PORT = 5000;

app.get("/testing", (req, res) => {
    res.json({
        "fuck": "you"
    });
});

app.listen(PORT, () => {
    console.log("Server running on port", PORT);
});