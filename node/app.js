const EventEmitter = require('events');
const emitter = new EventEmitter();


emitter.on('messageLogged', function(arg){
	console.log('Listner Called' + arg);
});
emitter.emit('messageLogged', 'this is event data');