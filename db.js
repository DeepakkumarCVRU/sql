import mysql from "mysql2"

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Dee@1234",
    database: "testdb"
})

connection.connect((err) => {
    if (err) {
        console.log("DB error ", err);
    } else {
        console.log("db connected")
    }
})

export default connection;