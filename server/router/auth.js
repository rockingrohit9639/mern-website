const express = require("express");
const router = express.Router();

require("../db/connection");

const User = require("../models/schema");

router.get("/", (req, res) =>
{
    res.send("This is our homepage");
})

// <<< ADDING DOCUMENT USING PROMISES >>>

// router.post("/register", (req, res) =>
// {
//     const { name, email, phone, work, password, cpassword } = req.body;

//     if (!name || !email || !phone || !work || !password || !cpassword)
//     {
//         return res.status(422).json({ error: "Bhai form pura bharo" });
//     }

//     User.findOne({ email: email })
//         .then((userExist) =>
//         {
//             if (userExist)
//             {
//                 return res.status(422).json({ error: "Bhai tumhara email already register h." });
//             }

//             const user = new User({ name, email, phone, work, password, cpassword });
//             user.save()
//                 .then(() =>
//                 {
//                     res.status(201).json({ message: "Bhai tera account create ho gaya." })
//                 })
//                 .catch((err) =>
//                 {
//                     res.status(500).json({ error: "Sorry bhai account nhi bn paya." })
//                 });
//         })
//         .catch((error) =>
//         {
//             console.log(error)
//         })
// })

// <<< ADDING DOCUMENT USING async-await >>>

router.post("/register", async (req, res) =>
{
    const { name, email, phone, work, password, cpassword } = req.body;

    if (!name || !email || !phone || !work || !password || !cpassword)
    {
        return res.status(422).json({ error: "Bhai form pura bharo" });
    }

    try
    {
        const userExist = await User.findOne({ email: email });

        if (userExist)
        {
            return res.status(422).json({ error: "Bhai tumhara email already register h." });
        }
        else if (password != cpassword)
        {
            return res.status(422).json({ error: "Password not matching." });
        }
        else
        {
            const user = new User({ name, email, phone, work, password, cpassword });

            await user.save();
            res.status(201).json({ message: "Bhai tera account create ho gaya." })
        }


    }
    catch (error)
    {
        console.log(error);
    }


})


router.post("/signin", async (req, res) =>
{
    try
    {
        const { email, password } = req.body;

        if (!email || !password)
        {
            return res.status(422).json({ error: "Kryapya krke apne email or password enter kijiye." })
        }

        const emailExist = await User.findOne({ email: email });

        if (!emailExist)
        {
            return res.status(422).json({ error: "Kripya valid email enter kre." })
        }

        if (emailExist.password === password)
        {
            return res.status(200).json({ "message": "Ho gaya login" });
        }
        else
        {
            return res.status(400).json({ "message": "Tumse na ho payega." })
        }
    }
    catch (err)
    {
        console.log(err)
    }


})

module.exports = router;