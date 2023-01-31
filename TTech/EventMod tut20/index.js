// Events Module
// Node.js has a built in module, called "Events",
// where you can create-, fire- and listen for your own events.

// Example 1 - Registering for the event to be fired only one time using once
// Example 2 - Create an event emitter instance and register a couple of callbacks
// Example 3 - Register for the event with callback parameters
const EventEmitter = require('events');
const event = new EventEmitter();
event.on("checkPage", (sc, msg) => {
    console.log(`status code is ${sc} and the page is ${msg}`);
})
event.emit("checkPage", 200, "ok")

// Steps to create events=>

// first method:
// const event = require("events");
// const EventEmitter = new event.EventEmitter();

//second method:  Creating Class
// const EventEmitter = require('events');
// Creating object from class(creating events)
// const event = new EventEmitter();

// Listen event must be above emit
// event.on("SayMyName", () => {
//     console.log("Name is Deepak ");
// });
// event.on("SayMyName", () => {
//     console.log("Name is Bhai");
// });
// event.on("SayMyName", () => {
//     console.log("Full name is Deepak Bhai");
// });

// event.emit("SayMyName")
/*The concept is quite simple: emitter objects emit named events that cause previously registered listeners to be called.So, an emitter object
basically has two main features:
Emitting name events.
Registering and unregistering listener functions.*/