const jwt = require("jsonwebtoken");
const User = require("../models/schema");

const authenticate = async (req, res, next) =>
{
    try
    {
        const tokenStr = req.headers.cookie;
        const splitToken = tokenStr.split("=");

        const token = splitToken[1];
        const response = jwt.verify(token, process.env.SECRET_KEY);
        
        const rootUser = await User.findOne({ _id: response._id, "tokens.token": token });

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
        res.status(401).send("Unauthorised user")
        console.log(err)
    }
}


module.exports = authenticate;