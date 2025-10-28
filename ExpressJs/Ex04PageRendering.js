//Demo on rendering static in express

const express = require('express');
const app = express();
const port = 3000 ;
const root = __dirname;

app.get('/api/greet' , (req,res)=>{
    res.send('Hello!! Welcome To the Express Page Rendering Demo.');
    
})
app.get('/api/empList' , (req , res)=>{
    res.send('Hello ! Welcome to the Express Employee Page Rendering Demo.');
})

app.get('/api/cstList',(req,res)=>{
res.send('Hello ! Welcome to the Express Customer List Demo.');
})

app.get('/',(req,res)=>{
    res.send('Hello !! Welcome to the Express Home Page.');
})

app.listen(port , ()=>{
    console.log(`Express Page Rendering Demo App Listening at http:localhost:${port}`);
    
});