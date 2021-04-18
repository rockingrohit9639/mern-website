const jwt = require("jsonwebtoken");
const User = require("../models/schema");

const authenticate = async (req, res, next) =>
{
    try
    {
        const token = req.cookies.jwtoken;
        const res = jwt.verify(token, process.env.SECRET_KEY);

        const rootUser = await User.findOne({ _id: res._id, "tokens.token": token });

        if (!rootUser)
        {
            throw new Error("User not found.")
        }
        
        req.token = token;
        req.rootUser = rootUser;
        req.userId = rootUser._id;

        next();
    } catch (err)
    {
        res.status(401).send("Unauthorised")
        console.log(err)
    }
}


module.exports = authenticate;