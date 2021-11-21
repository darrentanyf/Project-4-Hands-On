const Pool = require("pg").Pool
const pool = new Pool({
    user:"desertkrieg",
    password: "",
    host: "localhost",
    port: 5432,
    database: "homediy"
});

module.exports = pool;