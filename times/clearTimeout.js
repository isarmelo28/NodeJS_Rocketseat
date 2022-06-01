//  clearTimeout cancela um timeout
//  Para realização dessa função é necessário guardar a informação do timeout através do let.

// // Exemplo 1:
 const tempo = 3000
 const função = () => console.log("Done!")

 let guardar = setTimeout(função,tempo)
 clearTimeout(guardar)

//  É observado que não acontece nada, pq no mesmo instante que o sistema guarda as informações que devem ser guardadas, na linha 9 o sistema dectada que deve ser tudo apagado...desse modo não acontece nada no terminal
