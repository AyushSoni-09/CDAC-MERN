
const express = require('express');
const mysql = require('mysql2');

const app = express();
const port = 3000;


app.use(express.json()); // middleware to parse data 

app.use(express.urlencoded({extended : true})); //middleware to parse url-encoded data 

///////////////////////code for mysql connection ////////////////////////////////////////////

const db = mysql.createConnection({
    host:'localhost',
    user : 'root',
    password : '@21Eskcx009',
    database : 'nodejsdemo'
});

db.connect((err)=>{
    if(err){
        console.error("Error connecting to MySql database :" , err);
        return ;
    }
    console.log('Connected to MySql contact');
})

/////////////////////// Queries//////////////////////////////////////////////

const getAll = "Select * from contact";

const getById = "Select * from contact where id = ?";

const insertContact = "insert into contact (name , email , phoneNo) values(?,?,?)";
const updateContact = " update contact set name = ? , email = ? , phoneNo = ? where id = ?";
const deleteContact = "delete from contact where id = ?";
/////////////////////////////////////////////////////////////////

app.get('/api/contacts' , (req , res)=>{
    //get all contacts from database
    db.query(getAll , (error ,result )=>{
        if(error){
            console.error('Error fetching contact : ',error);
            res.status(500).json({error:'Internal Server Error'});
            return;
        }
         res.json(result);
    })
})

app.get('/api/contacts/:id' , (req , res)=>{
    // get contact by ID from database
    const Id = req.params.id; //Extract the id from the URL using req.parmas
    db.query(getById , [Id] ,( err , result )=>{
        if(err){
            console.error('Error fetching contat : ', err);
            res.status(500).json({error:'Internal Server Error'});
            return;
        }
        res.json(result[0]); //send the first record as response
    })
})

app.post('/api/create' , (req , res)=>{
    // create a new contact

    const{ name , email , phoneNo} = req.body; //extract data from body using req.body
    console.log(req.body);

    db.query( insertContact , [name , email , phoneNo] , (err , result)=>{
        if(err){
            console.error('Error creating contact' , err);
            res.status(500).json({error: 'Internal Server Error'});
        return ;
        }
       // res.status(201).json({message : 'Contact created', Id:result.insertId});
       console.log("Contacy created Successfully" , result.id)
     //res.writeHead(302 , {Location:'/'})
     res.redirect('/');
    
    });
    
});

app.post('/api/update' , (req , res)=>{
    //update an existing contact

    const Id= req.params.id;
    const { id , name , email , phoneNo} = req.body;
    console.log(res.body);
    
    db.query(updateContact , [name , email , phoneNo , id] , (err , result)=>{
        if(err){
            console.error('Error Updating contact : ' , err);
            res.status(500).json({error: 'Internal Server Error'});
            return ;
        }
        //res.json({message: ' Contact Updated'})
        res.redirect('/');

    })
})

app.post('/api/delete' , ( req , res)=>{
    // delete a contact 
    const {id}  = req.body; 
    db.query( deleteContact , [id] , (err , result)=>{
        if(err){
            console.error('Error in deteling..' , err);
            res.status(500).json({error:'Internal Servver Error'});
            return;
        }
        console.log('Contact Deleted');
      
          res.redirect('/');
    })
})

app.get('/' , (req , res)=>{
    res.sendFile(__dirname + '/views/RestApi.html')
})
app.get('/create', (req, res) => {    
    res.sendFile(__dirname + '/views/insert.html'); // ya agar tu template engine use kar raha h, to render()
});
app.get('/update' , (req,res)=>{

    res.sendFile(__dirname + '/views/update.html' );
});

app.get('/delete' , (req , res)=>{
    res.sendFile(__dirname + '/views/delete.html');
})

app.listen( port , ()=>{
    console.log(`REST API Demo App listening at http://localhost:${port}`);
    
});

