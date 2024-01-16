const elementoMenorvalor = document.getElementById('menor-valor')
const elementoMaiorValor = document.getElementById('maior-valor')
const menorValor = 1
const maiorValor = 300
const numeroSecreto = gerarNumeroAleatorio()

//através do Math.random ele gera um número aleatório, 0,alguma coisa, 
//por isso usamos o +1 para ele sempre sompar por 1 e remover o zero.
// parseint significa que queremos um numero inteiro
function gerarNumeroAleatorio() {
return parseInt(Math.random() * maiorValor + 1)}

//console.log(numeroSecreto)

elementoMenorvalor.innerHTML = menorValor
elementoMaiorValor.innerHTML = maiorValor