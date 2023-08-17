const User = require("../models/user");
const jwt = require("jsonwebtoken");

const verifyUser = async (req, res, next) => {
  try {
    const { email } = req.method === "GET" ? req.query : req.body;
    const findUser = await User.findOne({ email: email });
    console.log(findUser);
    if (!findUser) {
      res.status(400).json({ error: "Can't Find User" });
    }
    next();
  } catch (error) {
    return res.status(400).json({ error: "Authentication Error " });
  }
};



const verifyToken = async (req, res, next) => {
   const token = req.cookies.access_token;
   if (!token) {
        console.log("Not found cookies");
     return res.status(400).json({ error: "At First Login " });
   }else{
    try {
      const verify = await jwt.verify(token, process.env.JWT);
      if(verify){
        console.log("verify Done");
        const data = await User.findOne({ roll: verify.roll });
        if(data){
          req.userData = data;
          next();
        }else{
          return res.status(400).json({ error: "At First Login " });
        }
      }else{
       return res.status(400).json({ error: "At First Login " });
      }
    } catch (error) {
       return res.status(400).json({ error: error });
    }
   }
};


module.exports = {verifyUser , verifyToken};