const Pool = require("pg").Pool
require("dotenv").config()

const pool = new Pool({
    user: process.env.POSTGRESUSER,
    password: process.env.POSTGRESPW,
    host: process.env.POSTGRESHOST,
    port: 5432,
    database: process.env.POSTGRESDATABASE,
    ssl: {
        required: true,
        rejectUnauthorized: false,
    }
});

module.exports = pool;