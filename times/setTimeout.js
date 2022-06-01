//  setTimeout é uma função usada para trabalhar com tempo dentro do NodeJS 
//  Ela atua aguardando um certo tempo para atuar uma função que definirmos no nosso codigo 
// Obs: o tempo deve ser colocado em milisegundos e a função deve ser uma arrow fuction

// // EXEMPLO 1 - callback:

// const time = 3000
// const chocolate = () => console.log("Done")

// setTimeout(chocolate, time)

//  No exemplo 1, observamos que é programa aguarda 3000 milisegundos Para acionar a função, o que no nodeJS chamamos de callback

// // Exemplo 2- assincronismo:
//  const tempo = 3000
//  const função = () => console.log("Done!")

//  setTimeout(função,tempo)
//  console.log("Vem primeiro")

// //  No exemplo 2, observamos o assincronismo do NodeJS, onde ele executa a linha 19 antes de esperar os 3 segundos do meu callback-setTimout. sfs,dfp,