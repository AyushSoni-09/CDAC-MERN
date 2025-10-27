//This example covers rendering of files of HTML type in the server using http module of Nodejs.
// we need HTTP for Web Server Dev , FS for File Handling , BODY-PARSER for Processing POST handling

const http = require('http');
const fs = require('fs');

const parse = require('url').parse; //Http-GET Method Processing
const qs = require('querystring'); // Http-POST method Processing


const portNo = 1234;
const hostname = '0.0.0.0'

const root = __dirname;

function renderPage( fileName , res){
    const file = root +'/' +  fileName; // get the file name with path . Concatenate the filename with roo
    // t dir path .
    res.writeHead(200, { 'Content-Type': 'text/html' }); // set the response header info . Here content type is HTML
    fs.createReadStream(file).pipe(res); //Reads the file , puts it into a Filestream object and send it to response usind metod pipe . pipe is the method used to process the stream to the destination(response).

}

// function for handling POST request / operations 
function handlePostRequest(req,res){
    let inputs = '';
    //when the form is posted , it comes with 2 events , data and end . data is for handling POST abd end is to close the processing of the page.
    req.on('data' , (result)=>{ // data event  will contain the inputs Posted bu the user.
        inputs = result.toString(); // convert the binary data to string
        console.log(inputs);  
    })
    req.on('end',()=>{
        console.log("Now processing the inputs");
        const data = qs.parse(inputs); // parse the inputs using querystring module
        
        const msg = `<h1>Registration Successfull<h1><p> Welcome Mr.${data.txtName}</p> You will be contacted again for other details through you registered Email Address ${data.txtEmail}</p> Thank You!!!`
        
        res.writeHead(200, { 'Content-Type': 'text/html' });

        res.end(msg);
    })
    
}

    function processRequest(req , res){

        if(req.method == 'POST'){ // process POST request

            handlePostRequest(req,res);
            return;

        }
       
            const inputs = parse(req.url, true).query;
            if(inputs.txtName !=undefined){
                const msg = `<h1>Registration Sucessfull</h1><p> Welcome ${inputs.txtName}</p> U will be contected again for other details through Ur registered Email given as ${inputs.txtEmail} </p> Thank You!`;
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end(msg);
                return ;
            }

            switch(req.url){ // route the request based on URL
                case '/' : res.end("</h1> Welcome to Nodejs Http File Rendering Example </h1>");
                break;

                case '/Registration' : renderPage('/RegistrationPage.html' , res);
                break;
                
                default : renderPage('/ErrorPage.html',res);
            }
    }



//create the server and start listening at port no 1234

http.createServer((req, res) =>{
    console.log("Server is listening at port no " + portNo);
    processRequest(req , res);
}).listen(portNo , hostname);