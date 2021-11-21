const jwt = require("jsonwebtoken");
require('dotenv').config()

const jwtGenerator = (users_id) => {
    const payload = {
        user: users_id
    }
    return jwt.sign(payload,process.env.jwtSecret)
}

module.exports = jwtGenerator