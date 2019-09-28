const express=require('express');
var bodyParser = require('body-parser');
const app=express();
app.use(require('./utils/cors'));

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());
app.use(express.static('public'));
app.use('/',require('./routes/paytm'));

app.listen(process.env.PORT||5000,()=>{
    console.log("Servrt started.....5000");
})