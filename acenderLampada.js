const imagem = document.getElementById('imagem-lampada')
const botoes = document.getElementById('botoes')
const fundo = document.getElementById('fundo')

const lampada = (event) =>{
    acenderLampada[event.target.id]();
}

const acenderLampada = {
    'acesa' : () => {imagem.src = 'ligada.png'
                     fundo.style.backgroundColor = '#fff';},
    'apagada' : () => {imagem.src = 'desligada.png'
                       fundo.style.backgroundColor = '#2e2b2b';}
}

botoes.addEventListener('click', lampada)