//  setInterval irá rodar indefinidamente uma função a cada x milisegundo, ou seja, inúmeras vezes será rodada uma função 
// Obs: o tempo deve ser colocado em milisegundos e a função deve ser uma arrow fuction

// // Exemplo 1:
const tempo = 1000
const função = () => console.log("Done!")

setInterval(função,tempo)
//  É observado que no terminal teremos a função rodada a cada 1 segundos.
// para parar o terminal precisamos utilizar as teclas >> control + C.