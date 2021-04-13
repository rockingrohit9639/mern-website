const mongoose = require("mongoose");

const DB = process.env.DATABSE;

// CONNECTING TO MONGODB START
mongoose.connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
}).then(() =>
    console.log("Connection success.")
).catch((error) =>
{
    console.log(error)
});
// CONNECTING TO MONGODB END