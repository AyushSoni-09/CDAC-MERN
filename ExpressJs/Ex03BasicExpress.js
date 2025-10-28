const express = require('express');

const app = express(); // create an express app , remember that express is not a IFEE , we need call it as a function to create an app.

const port = 3000;

//define a route for the root URL

app.get('/', (req , res)=>{
    res.send('Hello World! This is my first Express App.');
});

app.listen(port,()=>{
    console.log(`Example app Listening at http://localhost:${port}`);
});