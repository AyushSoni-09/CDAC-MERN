const readline = require('readline');
const fs = require('fs');
const { Readline } = require('readline/promises');
fs.writeFileSync('SampleText', 'Hello, World! A sample string ti write ', 'utf-8');

const fileName='Ex07BuiltInModules.js'
const content = fs.readFileSync(fileName, 'utf-8');
//console.log(`Content of ${fileName}:\n`, content);


// // Reading the file in Async Manner which is the feature of Nodejs
// fs.readFile(fileName , 'utf-8' , function(err , data){
//     if(err){
//         console.log(`Error : ${err.message}`);
//         return ;
//     }
    
//     console.log(data);
    
// });

//////////////////Takig Input from the user//////////////////////////

const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
});

let name = " ";
let address = " ";
let salary = " ";

//they are async in nature so they will not wait for each other. 
        // rl.question("Enter your name:" , function(answer){
        //     console.log( `hello!! ${answer}`)
        // })
        // rl.question("Enter your address:" , function(answer){
        //     console.log(answer);  
        // })
        // rl.question("Enter your salary:" , function(answer){
        //     console.log(answer)
        // })

// so now we use chains to make them sync
        // rl.question("Enter your name:" , function(answer){
        //     name = answer;
        //     rl.question("Enter your address:" , function(answer){
        //         address = answer;
        //         rl.question("Enter your salary:" , function(answer){
        //             salary = answer;
        //             console.log(`The Name entered is ${name} from ${address} and ${salary} as salary`)
        //             rl.close();
        //         })
        //     })
        // }); 

//assync

// they can also be solve by using promises ( Async / Await)
// function Question(query){
//     return new Promise((resolve) =>{
//         rl.question(query , (answer) =>{
//             resolve(answer);
//         });
//     });
// }

// async function main(){
//     const name = await Question("Enter you name :");
//     const address = await Question("Enter your Address:");
//     const salary = await Question("Enter your Salary:");

//     console.log(` The Name is ${name} from ${address} and salary is ${salary}`);
    
// }
// main();

/////////////////////////////////OS Module/////////////////////
const os = require('os');
console.log(os.platform());

console.log(" The memeory is " + os.totalmem());
console.log(` The free memory is ${os.freemem()}`);

console.log(` The CPU info is ${os.cpus()}`);
console.log(`The totoal CPU  is ${os.cpus().length}`);
const cpus = os.cpus();

for(const cpu of cpus){
    console.log(cpu.speed)
    console.log(cpu.model)
    console.log(JSON.stringify(cpu))
}
