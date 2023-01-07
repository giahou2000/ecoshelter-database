import express from "express";
import mysql from "mysql2";

const router = express.Router();

router.get("/", (req, res) => {
    // make database connection
    const eco = mysql.createConnection({

        host: "localhost",
        user: "admin",
        password: process.env.admin_pass,
        database: "ecoshelterdb",

    });
    eco.query("SELECT * FROM protected_animal", function (err, result, fields) {
        if (err) throw err;
        console.log(result);
      });
    return res.send("Hello from admin");
});

export default router;