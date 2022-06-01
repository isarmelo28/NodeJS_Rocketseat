// EXEMPLO UTILIZANDO ALGUMAS FUNÇÕES ESTUDAS INTEGRADAS
const tempo = 1000
const função = () => console.log("Done!")

let interval = setInterval(função,tempo)
setTimeout(() => clearInterval(interval),4000)

// Deve ser observado que tanto o setTimeout e o setInterval começa a contar o tempo na mesma hora;
// Dessa forma, só serão observados 3 "dones" no terminal.