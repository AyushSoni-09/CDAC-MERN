const http = require('http');
const fs = require('fs');

const parse = require('url').parse;
const qs = require('querystring');// to process POST request inputs

const portNo = 1234;
const hostname = '0.0.0.0';

const root = __dirname;

const dataFile = root + '/data.json' ;


//Function to Convert the JSON data from the file into Array of object
function readDatarecords(){
    const contents = fs.readFileSync(dataFile , 'utf-8') // read the file contents and get json data as string
    let jsonObjects = JSON.parse(contents); // convert the json data into objects
    console.log(jsonObjects);
    return jsonObjects;   
}

//write to the json file 

function writeDatarecords(data){
    fs.writeFileSync(dataFile , JSON.stringify(data , null , 2)); // convert the data to json string and write to the file
}

function serveFile(res , filePath , contentType = 'text/html'){
    const fullPath = root + filePath;
    fs.readFile(fullPath , (err,content)=>{
        if(err){
            console.log("File read Error: ",err);
            
            res.writeHead(500);
            res.end("Internal Server Error");
            return;
        }
        res.writeHead(200 , {'Content-Type': contentType});
        res.end(content);
    })
}


// Handling POST Request for Adding new record

function handlePostRequest(req , res , callBack){
    let body = '';

    req.on('data' , (input)=>{
        body += input;
    });

    req.on('end' , ()=>{
        const parseData = qs.parse(body);
        callBack(parseData , res);
        res.writeHead(302 , {'Location' : '/'});
        return res.end();
    })
}


//create server and process requests at 1234

http.createServer((req , res)=>{
    if(req.method =='POST'){
        if(req.url == '/create'){
            handlePostRequest(req , res , (data)=>{
                const json = readDatarecords(); // get the current records from json file
                json.push({
                    id : parseInt(data.id),
                    name : data.name,
                    address : data.address
                });
                writeDatarecords(json); // write the updated data to the file
                
                })
        }else if( req.url == '/update'){
            handlePostRequest(req , res , data =>{
                const json = readDatarecords();

                const record = json.find((rec)=> rec.id === parseInt(data.id));
                if(record){
                    record.name = data.name;
                    record.address = data.address;
                    writeDatarecords(json);
                }
            })   
        } else if (req.url == '/delete'){
            handlePostRequest(req , res , data=>{
                const json = readDatarecords().filter((rec)=> rec.id != parseInt(data.id));
                writeDatarecords(json);
            })
        }else{
            res.writeHead(404);
            res.end("Resource Not Found");
        }
        }else if(req.method == 'GET'){ //for getting the webpages

            if(req.url == '/') return serveFile(res , '/views/index.html');
            if(req.url =='/create') return serveFile(res, '/views/add.html');
            if(req.url == '/update') return serveFile(res , '/views/update.html');
            if(req.url == '/delete') return serveFile(res , '/views/delete.html');

            if(req.url == '/read/employees'){
                res.writeHead(200 ,{'content-type':'application/json'}); // set the content type as json
                res.end(JSON.stringify(readDatarecords())); // send the json data as string
            }else{

                res.writeHead(404);
               return  res.end("Resource Not Found");
    }
}
}).listen(portNo , hostname);