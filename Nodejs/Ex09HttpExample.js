//Http is a module provided by Nodejs for performing http related operations in ur Applications. Http operation include GET , PUSH , and DELETE operations on the server. Using http module we can create a server which can listen to the requests from the client and respond back accordingly.

const http = require('http');
const portNo = 8080; //define a port no where ur requests are handled

// create a function to handle the requests from the client(web browser)

function requestHandler(req , res){
    console.log(`Request URL (received)  : ${req.url}`);

    switch(req.url){

        case '/': res.end("<h1> Welcome to Nodejs Http Module Example </h1>"); // send response to client(web page)
        break;

        case '/Employees': res.end("<h1> Employee Management System</h1>"); // send response to client(web page)
        break;

        case '/Customers' : res.end("<h1> Customer Management System</h1>");
        break;

        case'/PayRoll' : res.end(" <h1>PayRoll Management System <h1>");
        break;

        case '/Products' : res.end("<h1> Product Management System</h1>");
        break;
        
        default : res.end("h2> OOPS! This page is not avaliable with Us!!</h2>");
    
    }
}

http.createServer((request , response) => { //create server
    console.log("Server is available at port no. " + portNo );
    requestHandler(request , response);
}).listen(portNo); // start server at port no. 8080
