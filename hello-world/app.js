
const express = require("express");

const app = express();
const port = 8000;

app.get("/", (req, res) => {
    res.send("Hello World!");
});
app.get("/about", (req, res) => {
    res.send("Welcome to my server!");
});


app.listen(port, "0.0.0.0", () => {
  console.log(`Server is running on port ${port}`);
});