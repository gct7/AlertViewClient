import {EventEmitter} from 'events';

const myEmitter = new EventEmitter();

function greetHandler(name) {
  console.log('Hello, how are you?' + name);
}   

function goodbyeHandler() {
  console.log('Goodbye, have a great day!');
}

//Register event listener
myEmitter.on('greet', greetHandler);
myEmitter.on('goodbye', goodbyeHandler);

//Emit event
myEmitter.emit('greet', 'John Doe');
myEmitter.emit('goodbye');


//Error Handling
myEmitter.on('error', (err) => {
  console.error('An error occurred:', err.message);
});

//Simulate error
myEmitter.emit('error', new Error('Something went wrong'));




