//a API Web Speech Recognition API permite que se use o microfone para entrar dados e sair escrito no site quando necessário
// https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API/Using_the_Web_Speech_API
//https://www.sitepoint.com/introducing-web-speech-api/

const elementoChute = document.getElementById('chute')

//comando abaixo ativa a mesma, controla também a linguagem esta em portugues

window.SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

  const recognition = new SpeechRecognition();

  recognition.lang = 'pt-br'

  recognition.start()

  recognition.addEventListener('result', onSpeak)

  //quando usamos a api e falamos, ela guarda o que foi falado, para isso tem que acesar o array [0] 
  //depois o outro [0] e depois o trascript

  function onSpeak(e) {
    chute = e.results[0][0].transcript
    exibeChuteNaTela(chute)
    verificaChuteValido(chute)
  }

  //essa função exibe o chute do jogador na Tela
  function exibeChuteNaTela(chute) {
    elementoChute.innerHTML = `
    <div>Você disse:<div>
    <span class="box">${chute}<span>
    `
    
  }
//faz com que o jogo não pare e continue até acertar o número
  recognition.addEventListener('end', () => recognition.start())