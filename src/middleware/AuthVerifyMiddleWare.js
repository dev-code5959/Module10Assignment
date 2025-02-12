const jwt = require('jsonwebtoken');


module.exports = (req,res,next)=>{

    try{
        let token = req.headers['token'];

        if(!token){
            return res.status(401).json({status:"Unauthorized", message:"Missing Token"});
        }

        let decoded = jwt.verify(token, "key12345@");

        let email = decoded['data']['email']
        req.headers.email = email;
        next()
    }catch(error){
        res.status(401).json({ status: "unauthorized", error: "Invalid or expired token" });
    }
}