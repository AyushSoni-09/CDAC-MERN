//using Express to perform registration functionality with Post Method
const express = require('express');
const app = express();

port=3000;

// for handling post operation , we need to use body-prase middleware. This was not the part of Express earlier , but now it is include within express itself.

app.use(express.urlencoded({extended : true})); // to parse URL-encoded bodied. This is a middleware that is injected before the route handler are called.

app.get('/', (req,res)=>{
    res.send('<h1>Welcome to the Registration Page Rendering Demo</h1>')
})
app.get('/Registration', (req , res)=>{
    res.sendFile(__dirname + '/Registration.html');
});

app.get('/details',(req , res)=>{
    const name = req.query.txtName;
    const email = req.query.txtEmail;

    res.send(`Hello ${name}! Your email address is ${email} . Registration Successfull`);
    //send method send text as response to the browser.
})

app.post('/details',(req,res)=>{
    console.log(req.body); //this is available only if body=parse middleware is used

    const name = req.body.txtName;
    const email = req.body.txtEmail;

    res.send(`Hello ${name} ! Your email address is ${email}. Registration Successfull using POST method.`)
});

app.listen(port,()=>{
    console.log(`Registration Demo app Listening at http://localhost:${port}`);
})