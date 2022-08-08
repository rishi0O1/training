const jwt = require("jsonwebtoken") ;
const User = require("../db/models/User") ;
const secretKey = "secretKey" ;
const auth = (req , res , next) => {
    // console.log(req) ;
    try{
        const token = req.header("Authorization").replace("Bearer " , ""); 
        console.log(token) ;
        console.log(secretKey) ;
        const data = jwt.verify(token , secretKey) ;
        const user = User.findOne({
            _id: data._id ,
            "tokens.token": token ,
        });
        console.log(user) ;
        if(!user) throw new Error("unable to find user") ;
        req.token = token ;
        re.user = user ;
        next() ;
    }catch(e){
        res.send({
            message: "error while authentication of the token" + e ,
        })
    }
}

module.exports = auth ;