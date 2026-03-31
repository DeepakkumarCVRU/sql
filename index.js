import express from "express"
import connection from "./db.js"

const app = express();
app.use(express.json())

app.get("/", (req, res) => {
    res.send("hello world");
})

app.get("/getusers", (req, res) => {
    connection.query("SELECT*FROM users", (err, result) => {
        if (err) {
            res.status(500).json(err)
        } else {
            res.status(200).json(result)
        }
    })
})

app.post("/enterdata", (req, res) => {

    const { name, email } = req.body;

    connection.query("INSERT INTO users (name, email) VALUE (?,?)", [name, email], (err, result) => {
        if (err) {
            res.status(500).json(err)
        } else {
            res.status(201).json(result)
        }
    })

})

app.listen(5000, () => {
    console.log("server is running on port 5000");
})