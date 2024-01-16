
//função que verifica se o chute é valido
function verificaChuteValido(chute)
{ const numero =+chute

    if (chuteInvalido(numero)) {
        elementoChute.innerHTML += '<div>Valor invalido</div>'
        return
    }

    if (numeroMaiorOuMenorQueValorPermitido(numero)) {
        elementoChute.innerHTML += `<div>Valor invalido: o numero secreto precisa estar entre ${menorValor} e ${maiorValor}</div>`    
        return  
    }
    
    if (numero === numeroSecreto){
    document.body.innerHTML = `
    <h2>Você acertou!</h2>
    <h3>O número secreto é ${numeroSecreto}</h3>
    <button id="jogar-novamente" class="btn-Jogar">Jogar Novamente</button>
    `
    } else if 
    
    (numero > numeroSecreto){
    elementoChute.innerHTML += `
    <div>O número secreto é Menor <i class="fa-solid fa-down-long"></i></div>
    `
    } else if (numero < numeroSecreto){
             elementoChute.innerHTML += `
        <div>O número secreto é Maior <i class="fa-solid fa-up-long"></i></div>`}
    }

    


function chuteInvalido(numero) {
    return Number.isNaN(numero);
}

function numeroMaiorOuMenorQueValorPermitido(numero) {
    return numero > maiorValor || numero < menorValor  
}

document.body.addEventListener('click', e =>
{
    if (e.target.id =='jogar-novamente') {
        window.location.reload()
    }
})