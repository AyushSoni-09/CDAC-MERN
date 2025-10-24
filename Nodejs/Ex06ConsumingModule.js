const shoppingCart = require("./Ex04Modules")
//() is known Function Invocation Operator or Call Operator. In this specific context, the parentheses execute or call the function that was exported and returned by the require() statement.

console.log(shoppingCart);

shoppingCart.addItem({id : 123 , name :"iPhone" , price : 87000})
shoppingCart.addItem({id : 124 , name:"Apple" , price: 89})
shoppingCart.addItem({id : 125 , name : "Mango" , price:90})

const item = JSON.stringify(shoppingCart.getAll())
console.log(item);


const bill = shoppingCart.billAmount();

console.log(`Total Bill : ${bill}`);

const items  = shoppingCart.getAll()
for( const item of items){
    console.log(item.name);
  
}



