import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import pg from "pg";
import env from "dotenv";

env.config();
const app = express();
const port = 8080;
app.use(cors());
app.use(bodyParser.json());

const db=new pg.Client({
    user: process.env.PG_USER,
  host: process.env.PG_HOST,
  database: process.env.PG_DATABASE,
  password: process.env.PG_PASSWORD,
  port: process.env.PG_PORT,
});
db.connect();

app.post("/login", async(req, res) => {
try{
    const result=await db.query("SELECT * FROM details WHERE email=$1 AND password=$2",[req.body.email,req.body.password]);
    if(result.rows.length>0){
        res.send("Success");
    }else{
        res.send(false);
    }
    }catch (err) {
      console.log(err);
    }
});

app.post("/adduser", async (req, res) => {
    try{  
        await db.query("INSERT INTO details (name,email,password) VALUES ($1,$2,$3)",[req.body.text,req.body.email,req.body.password]);//why not`${item}`
        res.render("");
        }catch (err) {
          console.log(err);
        }
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});