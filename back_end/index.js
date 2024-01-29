
const express = require("express");
const app = express();
const cors = require("cors")

app.use(express.urlencoded({ extended:true }))
app.use(express.json())
app.use(
    cors(
        { origin : "http://localhost:3100" }
    )
)


const records= [ ];


app.post('/addRecord', (req,res)=> {
    const newRecord= {
        fullname: req.body.name,
        email: req.body.email,
    };
    records.push(newRecord);

    res.json(newRecord);
})


const message= [ ];

app.post ('/message', (req,res)=> {
    const userData= {
        fullname: req.body.name,
        email: req.body.email,
        message: req.body.message,
    };
    message.push(userData);

    res.json(userData);
})

app.get ('/Infos', (req,res)=> {
    res.json(message);
})


const port= 5100;
app.listen(port)
console.log(`running in port ${port}`)