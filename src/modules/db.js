const mysql = require("mysql");
const dbConfig = require("../config/dbConfig");

//create connect

const conn = mysql.createConnection({
    host: dbConfig.host,
    user: dbConfig.user,
    password: dbConfig.password,
    database: dbConfig.database,
});

//connect

conn.connect(error =>{
    if(error){
        throw error;
    }
    console.log("Connected to database successfully");
});

module.exports = conn;