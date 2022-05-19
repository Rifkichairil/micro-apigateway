const jwt = require('jsonwebtoken')
const { JWT_SECRET } = process.env 

module.exports = async (req, res, next) => {
    const token = req.headers.authorization;

    // valid or not
    jwt.verify(token, JWT_SECRET, function(err, decode){
        if (err) {
            return res.status(403).json({
                message: err.message
            })
        }

        req.user = decode
        // if ga ada error 
        return next();
    })
}