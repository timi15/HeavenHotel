const jwt = require("jsonwebtoken")
const authorize = (req, res, next) =>{
    const cookie = req.cookies.access_token;

    if(!cookie){
        return res.status(401).send("no cookie");
    }else{
        jwt.verify(cookie, process.env.JWT_SECRET, (error, decodedToken)=>{
            if(error){
                return res.status(403);
            }
                req.user = decodedToken;
                console.log(decodedToken);
                user = decodedToken;
                next();
        })
    }
}

module.exports = authorize;