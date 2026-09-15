const { EventEmitter } = require('events');

class Button extends EventEmitter {}
const button = new Button();

button.on('click', () => {
    console.log(`Button clicked!`);
});

button.on('Mouseover', () => {
    console.log(`Mouse is over the button clicked!`);
});

button.emit('click');
button.emit('Mouseover');