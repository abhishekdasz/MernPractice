const express = require('express');
const router = require('./auth-router/auth-router');

const app = express();

app.use(express.json());

app.use("/", router);

app.get("/", (req, res) => {
    res.status(200).send("Hello World, Welcome to server.");
});

const PORT=5000;
app.listen(PORT, () => {
    console.log(`The server is running in port ${PORT}`);
});