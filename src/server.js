const express = require("express");
const bodyParser = require("body-parser");
const port = 3000;


const app = express();
const cors = require('cors');
app.use(cors({
    origin: '*'
}));


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", (req,res) =>{
    res.json({message: "Welcome to the homepage"});
});
//give the routes

require("./routes/employeeRoutes")(app);

//listen

app.listen(port,()=>{
    console.log("Listening at port: 3000");
});