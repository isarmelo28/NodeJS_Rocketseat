// Como utilizar os eventos - iremos utilizar a função tipo classe EventEmitter, para isso deve ser declarada como const {nomeda função tipo classe}.

const { EventEmitter } = require('events');
const ev = new EventEmitter();


// Disparar Eventos sempre - Usa (on) / Disparar Eventos uma única vez - Usa (once)
//  nomedafunção.on('um som, o que é ouvido', arrow function)
ev.once('saySomething',(messagem) => {console.log("Eu ouvi você: ",messagem)})

// Como Ouvir Eventos - nomedafunção.emit
 ev.emit('saySomething', "João")
 ev.emit('saySomething', "Isadora")
 ev.emit('saySomething', "Heitor")
