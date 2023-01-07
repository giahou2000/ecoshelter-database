import * as dotenv from "dotenv";
dotenv.config();

import express from "express";
import mysql from "mysql2";
import bodyParser from "body-parser";
import router from './routes/index.js';

const app = express();
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

// make database connection
const eco = mysql.createConnection({

    host: "localhost",
    user: "admin",
    password: process.env.admin_pass,
    database: "ecoshelterdb",
  
  });

eco.connect((err) => {
    if (err) {
        throw err;
    }
    console.log("MySql Connected");
  });


/** 
 * get, post, delete API
 **/ 

// general
app.get("/ecoshelterdb", (req, res, next) => {
    return res.send("Hi random person. This is an ecoshelter database. Have a nice day!!!");
});

// just for server testing
// app.post("/", (req, res, next) => {
//     console.log(req.body);
//     const { name } = req.body;
//     return res.send("Hi random person");
// });

app.use('/', router);

// At the end for safety
app.all("/*", (req, res) => {
    return res.send("ooops");
});

app.listen(3000);
