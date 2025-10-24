console.log("Testing the JS function for Nodejs")

// alter("Hello world") => Does not work in NodeJs , so is confirm and prompt.

console.log(Math.sqrt(125));

const data = [123 , 23 , 45 , 67 ]
console.log(data);

for( const key in data){
    console.log(`key : ${key} , value : ${data[key]}`);    
}

console.log(JSON.stringify(data)); // converting data into JSON
