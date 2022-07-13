//---------Menu Sanduiche----------//

let abrir = document.querySelector('#abrir')
let fechar = document.querySelector('#fechar')

abrir.onclick = abrirOuFecharMenu
fechar.onclick = abrirOuFecharMenu

let menuMobile = document.querySelector('.menuMobile')
let aberto = false

function abrirOuFecharMenu () {
    if (aberto === false) {
        aberto = true
        menuMobile.classList.add('aberto')
    } else {
        aberto = false
        menuMobile.classList.remove('aberto')
    }
}

//-------------Add Musicas-------------//

const musicas = [
    'Manso e Humilde (Quem é Esse Homem)',
    'Me Satisfaz',
    'Nós Somos Sua Noiva',
    'Cantamos Santo',
    'Colisão',
    'O Brasil é Teu',
    'Sempre Reinas',
    'Redenção'
]

let musica = ''

for(let contador = 0; contador < musicas.length; contador++) {

    let music = musicas[contador]
    
    musica += `
        <li class ="musicList">
            <div>
                <h3>${music}</h3>
            </div>
            <div class="divButton">
                <button class="verCifra">
                    <i class="fa-solid fa-eye"></i>
                </button>
                <button>
                    <i class="fa-solid fa-download"></i>
                </button>
            </div>
        </li>
        <div class="imgCifra">
            <img src="img/${music}.png" alt="Cifra ${music}"></img>
        </div> 
    `
}

document.querySelector('#pacoteCifra').innerHTML = musica

//-----abrir e fechar cifra-----

let abrirCifra = document.querySelectorAll('.verCifra')
let imgCifra = document.querySelector('.imgCifra')

abrirCifra.forEach((botao) => botao.onclick = abrirImg )

function abrirImg(event) {
    const botao = event.currentTarget

    const musicList = botao.parentElement.parentElement
    const imgCifra = musicList.nextElementSibling

    if (imgCifra.classList.contains('aberto')) {
        imgCifra.classList.remove('aberto')
    } else {
        imgCifra.classList.add('aberto')
    }
}




