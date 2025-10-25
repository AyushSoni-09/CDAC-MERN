 //Events are actions performed on the object by the user directly or indirectly. Examples could be click , mouse move , mouse leave etc . Most of the Windows Apps use these events to perform an operation , an action in execute( tiggered ) on it . It follows a listener pattern design.

 // In Nodejs we have a built in module called events to work with events. It provides us with EventEmitter class which can be used to create , listen and emit events.
 
 //U can create ur own Application as notification message when a user preforms a certain action with the object. Performing CRUD operation on the object could be certain action in the real world. Once the addition is successfull , U could trigger an event notifying that the addtion was completed to the user.

//An event has 3 things to work , Creating an Event , Triggering an Event and Handling what needs to be done if the event triggers.


const event = require('events'); //Event is the built in module available in Nodejs
const { default: CacheHandler } = require('undici-types/cache-interceptor');

const button = new event(); // creating an  event object 

button.on("abc" , function(){
    console.log(" ABC event was Triggered.");
}) // sepcify a name/register an event and tell it does(Event Handler)
button.on("click",() => console.log(" Button was Clicked ,click event triggered")); // another event  

// Triggering the event
button.emit("abc"); // triggering the event
button.emit("click"); // triggering the click event


//U can also pass parameters to the event handler function while emitting the event
button.on("sum" , function(a , b){
    console.log(` The sum of ${a} and ${b} is ${a+b}`);
})

button.emit("sum" , 5 , 10); // passing parameters while emitting the event

/*
 *create the event Object.
 
 * on method shoulc be used to register the event and map the  handler.

 *emit method is used to raise/trigger the event appropriately.
 */