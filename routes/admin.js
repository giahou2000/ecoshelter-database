import express from "express";
import mysql from "mysql2";
// import bodyParser from "body-parser";

const router = express.Router();
// router.use(bodyParser.json());
// router.use(bodyParser.urlencoded({ extended: true }));

router.get("/", async (req, res, next) => {
    try{
        // make database connection
        const eco = mysql.createConnection({

            host: "localhost",
            user: "admin",
            password: process.env.admin_pass,
            database: "ecoshelterdb",

        });
        // make the query
        if (err) throw err;
        eco.query("SELECT * FROM protected_animal", function (err, result, fields) {

            if (err) throw err;
            console.log(result);

        });
        return res.json({ message: "Hello from admin!" });
    } catch (err) {
        return next(err.body);
    }
});

export default router;