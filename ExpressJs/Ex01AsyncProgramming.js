// Js is single threaded language but it can handle asynchronous operation using callBack , Promises and async/aeait syntax. It internally uses an event loop to manage these operation without bocking the main thread.
//Some of the popular ways to handle asynchronous programming in JS are : callBacks , promises and async/await syntax. Typically we  use them for operations like fetching data from an API , reading files or performing time - consuming computations.

//CallBack: A function passed into another function to be executed latr , once a certain operation is complete.

//Async/Await : Syntactic sugar built on top of promises that allows writing asynchronous code in a more synchronous fashion.

//Promise : An object representing the eventual completion ( or failure ) of an asynchronous operation and its resulting value.

//Example of callBack function:

// function invokedArithematicOperation( first , second , callBack){
    
//     //do some validation if required
//     if(typeof first !=='number' || typeof second !== 'number'){
//         throw new Error("Invalid Input , both inputs must me numbers.");
//     }
//     //Then we invoke the callBack function
//     const res = callBack( first , second);
//     console.log(" The result of the operation is : "+ res);
// }

// function add(a , b){
//     return a+b;
// }

// console.log("Program started");
// invokedArithematicOperation(5,10,add);
// console.log("Program ended");


// //Example of setTimeout function : setTimeout is a built-in JS function that allows you to execute a function after a specified delay ( in milliseconds). It is commonly used to simulate asynchronous behavior or to schedule tasks to be executed later.

// function callMeAfterSometime(){
//     console.log("Operation should be executed after sometime.");
// }

// setTimeout(callMeAfterSometime , 2000); // milliseconds
// console.log(" This message is displayed immediately");


//Promise Example:

// A promise is an object that represents a completion or a failure of a certain asynchronous operation and its resulting value. Promise takes 2 parameter : resolve and reject. Resolve is called  when the operation is successful , and  reject is called when there is an error. They are both CallBack functions.

//creating a new Promise object that small resolve the long standing operation  and return the data when the operation is complete . Everyt promises object takes a function with 2 parameter : resolve and reject . The functio contains the code for the asynchronous operation or operation that take longer time to complete . Once complete successfully , resolve is called with the result . If there is an error , reject is called with the error message.

const fetchData = new Promise((resolve , reject)=>{
    //Block takes time to complete , e.g . fetching dat from a server
    console.log("Fetching Data from Server....");
    try{
        setTimeout(()=>{
            const data = { id : 1 , name :"Ayush Soni"};
            if(data.id != 1){
                reject("Invalid data fetching")
            }
            console.log("Data fetched successfully");
            resolve(data);
        },5000);
    }
    catch(error){
        reject("Error Fetching Data : " + error.message); // call reject when there is an error
    }
    console.log("Continuing with other operation while data is being fetched.....");
    
})

//This function is created to be called when the promises is resolved successfully

function resolvingLogic(data){
    console.log("Data recevied in then : " + data);
}

//Called the fatchedData ,it takes some times to fetch the data , Then calls UR resolvingLogic functin when the data is fetched successfully.
fetchData.then(resolvingLogic).catch(err =>{
    console.error(err);
});

console.log(" This message is displayed immediately after calling fetchData...");


console.log("Asyn/Await Example.... ");

async function fetchDataAsyn(){
    try{
        const data = await fetchData; // await is used to wait for the promises to resolve

        console.log("Data received using Async/await : ", data);
    }catch(error){
        console.error(error);
    }
}

fetchDataAsyn();

