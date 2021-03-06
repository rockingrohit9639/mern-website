require("dotenv").config({ path: "./config.env" });
const express = require("express");
const app = express();

const PORT = process.env.PORT;

// Connecting mongodb
require("./db/connection");

// Making our app to read json format
app.use(express.json());


// Linking the router file
app.use(require("./router/auth"));


// app.get("/about", (req, res) =>
// {
//     res.send("This is our About page");
// })

app.get("/contact", (req, res) =>
{
    res.send("This is our contact page");
})


app.get("/login", (req, res) =>
{
    res.send("This is our login page");
})

app.listen(PORT, () =>
{
    console.log(`Listening : http://localhost:${ PORT }`)
})

