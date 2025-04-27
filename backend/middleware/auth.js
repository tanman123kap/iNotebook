const jwt = require("jsonwebtoken");

const authUser = async (req, res, next) => {
    try {
        const token = req.header("token");
        if(!token) {
            res.json({success: false, errors: "Not Authorize! Login Again."});
        } else {
            try {
                const token_verify = jwt.verify(token, process.env.JSON_WEB_TOKEN_SECRET);
                req.user = token_verify;
                next();
            } catch (error) {
                res.json({success: false, errors: error.message});
            }
        }
    } catch (error) {
        res.json({success: false, errors: error.message});
    }
}

module.exports = authUser;