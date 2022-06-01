//  clearInterval irá cancelar um setInterval registrada

// // Exemplo 1:
const tempo = 1000
const função = () => console.log("Done!")

let interval = setInterval(função,tempo)
clearInterval(interval)
//   é observado que no terminal não aparece nada pq o clearInterval cancela o setInterval.


