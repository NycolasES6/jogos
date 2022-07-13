// variaveis do jogo
let casa, jog
let j = 2
let casas = ['', '', '', '', '', '', '', '', '']

let placar = [0, 0]
let ponto = [document.getElementById(px), document.getElementById(po)]
// variaveis do jogo

// Functions do jogo
function joga(c, ic) {
  if (casas[ic] != '')
  return alert("lugar ja está ecupado")
  

  if (j == 4)
    j = 2
    
  if (j == 2) {
    jog = 'x'
  } else if(j == 3){
    jog = 'o'
  }

  casas[ic] = jog
  j++

  marcaJogada(c)
}

function marcaJogada(c){
  casa = document.getElementById(c)
  casa.innerHTML = jog

  verificaVenceu()
}

function verificaVenceu() {
  // Horizontal
  if ((casas[0] == casas[1]) && (casas[1] == casas[2]) && (casas[0] != '')){
    console.log(`jogador ${jog} venceu`)
    zeraJogo()
  }
  else if ((casas[3] == casas[4]) && (casas[4] == casas[5]) && (casas[3] != '')){
    console.log(`jogador ${jog} venceu`)
    zeraJogo()
  }
  else if ((casas[6] == casas[7]) && (casas[7] == casas[8]) && (casas[6] != '')){
    console.log(`jogador ${jog} venceu`)
    zeraJogo()
  }

  // Transversal
  if ((casas[0] == casas[4]) && (casas[4] == casas[8]) && (casas[0] != '')){
    console.log(`jogador ${jog} venceu`)
    zeraJogo()
  }
  else if ((casas[2] == casas[4]) && (casas[2] == casas[6]) && (casas[2] != '')){
    console.log(`jogador ${jog} venceu`)
    zeraJogo()
  }

  // Vertical
  if ((casas[0] == casas[3]) && (casas[3] == casas[6]) && (casas[0] != '')){
    console.log(`jogador ${jog} venceu`)
    zeraJogo()
  }
  else if ((casas[1] == casas[4]) && (casas[4] == casas[7]) && (casas[1] != '')){
    console.log(`jogador ${jog} venceu`)
    zeraJogo()
  }
  else if ((casas[2] == casas[5]) && (casas[5] == casas[8]) && (casas[2] != '')){
    console.log(`jogador ${jog} venceu`)
    zeraJogo()
  }
}

function zeraJogo(){
  j=2
  for(let i=1;i<10;i++){
    casa = document.getElementById(`c${i}`)
    casa.innerHTML = ''
    casas = ['', '', '', '', '', '', '', '', '']
  }
  marcaPontos()
}

function marcaPontos(){
  ponto = document.getElementsByClassName('ponto')

  if (jog =='x')
  placar[0]++
  else
  placar[1]++

  ponto[0].innerHTML = placar[0]
  ponto[1].innerHTML = placar[1]
}
// Functions do jogo