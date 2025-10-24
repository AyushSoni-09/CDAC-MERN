/* Modules are the self contained component that contain funstion  , variable , and other forms of data 
   that are exported and imported at the other end and consumed. Modules are based on Common.js features.
*/

 module.exports =  (function(){
 // module can have funstions , fields in it.
 const cart = [] 

 function addItem(item){
    cart.push(item)
 }


 function getAll(){
    return cart
 }

 // assumption : an item has an attribute called price int it .

 function billAmount(){
    let bill = 0.0
    for( const item of cart){
        bill += item.price
    }
    return bill
 }
 return {
    addItem , getAll , billAmount
 }

}) () // IFFE( Immediately Invoked Function Expression )