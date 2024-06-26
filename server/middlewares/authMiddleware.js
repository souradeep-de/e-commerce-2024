const jwt = require('jsonwebtoken');

module.exports = (req,res,next)=>{
    try {
        const token = req.header('authorization').split(" ")[1];
        const decryptedtoken = jwt.verify(token,process.env.TOKEN_SECRET);
        req.body.userId = decryptedtoken._id;
        next();
    } catch (error) {
        res.send({
            success: false,
            message: error.message
        });
    }
}