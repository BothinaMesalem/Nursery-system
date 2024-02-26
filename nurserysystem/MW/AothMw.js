const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(" ")[1]; 
        const decodedToken = jwt.verify(token, process.env.secret_key);
        req.token = decodedToken;
        next();
    } catch (error) {
        error.message = "not authenticated";
        error.status = 401;
        next(error);
    }
}
