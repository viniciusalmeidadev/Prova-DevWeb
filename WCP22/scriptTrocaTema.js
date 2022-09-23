
const botaoTrocaTema = document.createElement('img')
botaoTrocaTema.setAttribute('onclick', 'trocaTema();')
botaoTrocaTema.setAttribute('src', './assets/trocaParaDark.png')
botaoTrocaTema.classList.add('botaoTrocaTema')
cabecalhoContainer.appendChild(botaoTrocaTema)

const TrocaTemalogo = document.getElementById('logo')
const trocaTemaAbasMenu = document.querySelectorAll('.abaDoMenu')
const trocaTemaContainerPrincipal = document.querySelector('.principalContainer')



function trocaTema() {
    const trocaTemaFigurinha = document.querySelectorAll('.figurinha')
    const trocaTemaTextoFigurinha = document.querySelectorAll('.texto')
    const trocaTemaCardSelecao = document.querySelectorAll('.card')
    if(temaAtual == 1){

        body.style.backgroundColor = "#121619"
        
        cabecalhoContainer.classList.remove('cabecalhoContainerLight')
        cabecalhoContainer.classList.add('cabecalhoContainerDark')

        TrocaTemalogo.classList.remove('textoLogoLight')
        TrocaTemalogo.classList.add('textoLogoDark')

        trocaTemaAbasMenu.forEach(e => e.classList.remove('abaDoMenuLight'));
        trocaTemaAbasMenu.forEach(e => e.classList.add('abaDoMenuDark'))

        trocaTemaFigurinha.forEach(e => e.classList.remove('figurinhaLight'));
        trocaTemaFigurinha.forEach(e => e.classList.add('figurinhaDark'))

        trocaTemaTextoFigurinha.forEach(e => e.classList.remove('colorLight'));
        trocaTemaTextoFigurinha.forEach(e => e.classList.add('colorDark'))

        trocaTemaCardSelecao.forEach(e => e.classList.remove('cardSelecaoLight'))
        trocaTemaCardSelecao.forEach(e => e.classList.add('cardSelecaoDark'))

        trocaTemaContainerPrincipal.style.backgroundColor = "#121619"

        botaoTrocaTema.setAttribute('src', './assets/trocaParaLight.png')
        temaAtual -= 1
        console.log(temaAtual)
    }else if(temaAtual == 0){
        body.style.backgroundColor = "#fff"

        cabecalhoContainer.classList.add('cabecalhoContainerLight')
        cabecalhoContainer.classList.remove('cabecalhoContainerDark')

        TrocaTemalogo.classList.add('textoLogoLight')
        TrocaTemalogo.classList.remove('textoLogoDark')

        trocaTemaAbasMenu.forEach(e => e.classList.add('abaDoMenuLight'))
        trocaTemaAbasMenu.forEach(e => e.classList.remove('abaDoMenuDark'))

        trocaTemaFigurinha.forEach(e => e.classList.add('figurinhaLight'));
        trocaTemaFigurinha.forEach(e => e.classList.remove('figurinhaDark'))

        trocaTemaTextoFigurinha.forEach(e => e.classList.add('colorLight'));
        trocaTemaTextoFigurinha.forEach(e => e.classList.remove('colorDark'))
        
        trocaTemaCardSelecao.forEach(e => e.classList.add('cardSelecaoLight'))
        trocaTemaCardSelecao.forEach(e => e.classList.remove('cardSelecaoDark'))

        trocaTemaContainerPrincipal.style.backgroundColor = "#fff"

        botaoTrocaTema.setAttribute('src', './assets/trocaParaDark.png')
        temaAtual += 1
        console.log(temaAtual)
    }

    
}