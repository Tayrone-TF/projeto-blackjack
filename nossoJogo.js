/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

console.log(`Bem vindo ao BLACK JACK !!!`)
const bemVindo = confirm(`Deseja iniciar uma nova rodada?`)


let primeiraCartaJogador
let segundaCartaJogador
let pontosJogador

let primeiraCartaComputador
let segundaCartaComputador
let pontosComputador

if (bemVindo === true) {
   primeiraCartaJogador = comprarCarta()

   if (primeiraCartaJogador.valor === 11) {
      segundaCartaJogador = comprarCarta()

      if (segundaCartaJogador.valor !== primeiraCartaJogador.valor) {
         pontosJogador = primeiraCartaJogador.valor + segundaCartaJogador.valor
      } else {
         while (segundaCartaJogador.valor === 11) {
            segundaCartaJogador = comprarCarta()
         }
         pontosJogador = primeiraCartaJogador.valor + segundaCartaJogador.valor
      }
   } else {
      segundaCartaJogador = comprarCarta()
      pontosJogador = primeiraCartaJogador.valor + segundaCartaJogador.valor
   }

   primeiraCartaComputador = comprarCarta()

   if (primeiraCartaComputador.valor === 11) {
      segundaCartaComputador = comprarCarta()

      if (segundaCartaComputador.valor !== primeiraCartaComputador.valor) {
         pontosComputador = primeiraCartaComputador.valor + segundaCartaComputador.valor
      } else {
         while (segundaCartaComputador.valor === 11) {
            segundaCartaComputador = comprarCarta()
         }
         pontosComputador = primeiraCartaComputador.valor + segundaCartaComputador.valor
      }
   } else {
      segundaCartaComputador = comprarCarta()
      pontosComputador = primeiraCartaComputador.valor + segundaCartaComputador.valor
   }


   if (pontosJogador > pontosComputador) {
      console.log(`Usuário - cartas: ${primeiraCartaJogador.texto} ${segundaCartaJogador.texto} - ${pontosJogador} pontos`)
      console.log(`Computador - cartas: ${primeiraCartaComputador.texto} ${segundaCartaComputador.texto} - ${pontosComputador} pontos`)
      console.log("O usuário ganhou!")
   } else if (pontosComputador > pontosJogador) {
      console.log(`Usuário - cartas: ${primeiraCartaJogador.texto} ${segundaCartaJogador.texto} - ${pontosJogador} pontos`)
      console.log(`Computador - cartas: ${primeiraCartaComputador.texto} ${segundaCartaComputador.texto} - ${pontosComputador} pontos`)
      console.log("O computador ganhou!")
   } else {
      console.log(`Usuário - cartas: ${primeiraCartaJogador.texto} ${segundaCartaJogador.texto} - ${pontosJogador} pontos`)
      console.log(`Computador - cartas: ${primeiraCartaComputador.texto} ${segundaCartaComputador.texto} - ${pontosComputador} pontos`)
      console.log("Empate!")
   }


} else {
   console.log('O jogo acabou!!!')
}