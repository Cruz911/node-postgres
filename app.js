const express = require("express")
const exphbs = require('express-handlebars')
const bodyParser = require("body-parser")
const path = require("path")

const app = express();

const port = process.env.PORT || 5000;


const db = require('./config/database')
const gigs = require('./routes/gigs')

db.authenticate()
  .then(()=> console.log("DB connected"))
  .catch(err => console.log("Error:" + err))

app.use("/gigs", gigs);

app.get('/', (req, res)=>{
    res.send("wapinda")
});

app.listen(port, ()=>{
    console.log(`Server listening on Port ${port}`)
});

