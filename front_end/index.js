
const express = require("express");
const app = express();
app.use (express.static('public'));

app.get('/', (req,res)=> {
    res.sendFile(__dirname + '/public/index.html')
})
app.get ('/contactUs', (req,res)=> {
    res.sendFile(__dirname + '/public/contact.html')
})
app.get ('/home', (req,res)=> {
    res.sendFile(__dirname + '/public/home.html')
})

app.listen(3100)
console.log('Server is running in port 3100')