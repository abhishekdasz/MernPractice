const express = require('express');

const app = express();

app.get("/", (req, res) => {
    res.status(200).send("Hello World, Welcome to server.");
});

const PORT=5000;
app.listen(PORT, () => {
    console.log(`The server is running in port ${PORT}`);
});