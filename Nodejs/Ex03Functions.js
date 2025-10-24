//3 ways to create function in JS

function addFun(v1 , v2){
    return (v1+v2)
}

console.log(addFun(5,6));


//anonymous function 

const subFunc = function (v1,v2){
    return v1-v2
}

console.log(subFunc(6 ,5));

// More improvised and handy way of creating function id Arrow function or Lambda Function

const mulFun = (v1 , v2 ) => v1*v2

console.log(mulFun(2 , 4));

