const {Client} = require("pg");
const dotenv = require("dotenv");

dotenv.config();


const con= new Client({
    host: "localhost",
    user: "postgres",
    port:"4000",
    database:"softzenix",
    password: process.env.Postgre
});

con.connect().then(()=> console.log("connected"));

con.query('Select * from applications',(err,res)=>{
    if(!err){
        console.log(res.rows);
    }else{
        console.log(err.message);
    }
})