var temaAtual = 1

const abasDoMenu = ['figurinhas', 'legends', 'estatisticas']

const body = document.getElementsByTagName("body")[0]

function alteraQuantidadeFigurinha(nome,tipoOperacao, tipoAlbum){

    /*parâmetro nome indica o nome da figurinha, tipo de operacao indica qual operacao deve ser feita
    operacao = 1 adiciona
    operacao = 2 subtrai
    tipo album = normal 
    tipo album = legend
    */    
    if(tipoAlbum === 'normal'){
        for(grupo of album.grupo){

            for(var selecao of grupo.selecoes){
    
                for(figurinha of selecao.figurinha){
    
                    if(nome == figurinha.nomeFigurinha && tipoOperacao == 1){
    
                        figurinha.quantidade += 1
                        
    
                        if(figurinha.quantidade == 1){
                            selecao.quantidadeAdquirida += 1
                            album.quantidadeTotal += 1
                        }
                        
                    }else if(nome == figurinha.nomeFigurinha && tipoOperacao == 2 && figurinha.quantidade >= 1){
                        figurinha.quantidade -= 1
                        if(figurinha.quantidade == 0){
                            selecao.quantidadeAdquirida -= 1  
                            album.quantidadeTotal -= 1
                        }
                        
                    }else if(nome == figurinha.nomeFigurinha && tipoOperacao == 2 && figurinha.quantidade == 0){
                        
                            alert('Você não possui figurinhas para retirar!')
                        
                    }
                    
                    if(figurinha.quantidade >= 1){
                        document.getElementById(`container${figurinha.nomeFigurinha}`).classList.add('possuiFigurinha')
                    }else if(figurinha.quantidade == 0 ){
                        document.getElementById(`container${figurinha.nomeFigurinha}`).classList.remove('possuiFigurinha')
                    }
    
                    document.getElementById(`qntd${figurinha.nomeFigurinha}`).innerText = figurinha.quantidade
                    
                }
                
                
            }
        }
    }else if(tipoAlbum == 'legend'){
        for(jogador of legends.jogadores){
            for(tipo of jogador.tipoFigurinhas){
                if(nome == tipo.id && tipoOperacao == 1){
    
                    tipo.quantidade += 1
                    

                    if(tipo.quantidade == 1){
                        legends.quantidadeLegendsTotal += 1
                    }
                    console.log(tipo.quantidade)
                }else if(nome == tipo.id && tipoOperacao == 2 && tipo.quantidade >= 1){
                    tipo.quantidade -= 1
                    if(tipo.quantidade == 0){
                        legends.quantidadeLegendsTotal -= 1
                    }
                    console.log(tipo.quantidade)
                }else if(nome == tipo.id && tipoOperacao == 2 && tipo.quantidade == 0){
                    
                        alert('Você não possui figurinhas para retirar!')
                    
                }

                if(tipo.quantidade >= 1){
                    document.getElementById(`container${tipo.id}`).classList.add('possuiFigurinha')
                }else if(tipo.quantidade == 0 ){
                    document.getElementById(`container${tipo.id}`).classList.remove('possuiFigurinha')
                }

                document.getElementById(`qntd${tipo.id}`).innerText = tipo.quantidade

            }
        }
       
    }
    
}



const principalContainer = document.createElement('div');
principalContainer.classList.add('principalContainer')
    
    
function montaHeader(){
    const cabecalhoContainer = document.createElement('div')
    cabecalhoContainer.classList.add('cabecalhoContainerLight')
    cabecalhoContainer.id = 'cabecalhoContainer'
    
    const logo = document.createElement('h3')
    logo.innerText = 'Marcador de Sticker'
    logo.classList.add('textoLogoLight')
    logo.id = 'logo'
    
    const abasDoMenuContainer = document.createElement('ul')
    abasDoMenuContainer.classList.add('abasDoMenuContainer')
    
    
    for(abaDoMenu of abasDoMenu){
        const textoLink = document.createTextNode(abaDoMenu)
    
        const link = document.createElement('a')
        link.appendChild(textoLink)
        
    
        const aba = document.createElement('li')
        aba.setAttribute('onclick', `trocaHTML("${abaDoMenu}")`)
        aba.appendChild(link)
        aba.classList.add('abaDoMenu','abaDoMenuLight')
    
        abasDoMenuContainer.appendChild(aba)
    }
    
    
    cabecalhoContainer.appendChild(logo)
    cabecalhoContainer.appendChild(abasDoMenuContainer)
    body.appendChild(cabecalhoContainer)
}


/*SEÇÃO DE FIGURINHAS*/
function montaAlbum(){
    

    for(grupo of album.grupo){
        const tituloGrupoTexto = document.createTextNode(grupo.nomeGrupo)
        const tituloGrupo = document.createElement('p')
        tituloGrupo.appendChild(tituloGrupoTexto)

        const grupoHeader = document.createElement('div')
        grupoHeader.classList.add('grupo')
        grupoHeader.appendChild(tituloGrupo)

        const grupoContainer = document.createElement('div')
        grupoContainer.id = grupo.nomeGrupo
        grupoContainer.classList.add('conteinerGrupo')
        grupoContainer.appendChild(grupoHeader)

        principalContainer.appendChild(grupoContainer)

        for(selecao of grupo.selecoes){

            const nomeSelecaoTexto = document.createTextNode(selecao.nomeSelecao)
            const nomeSelecao = document.createElement('p')
            nomeSelecao.classList.add('texto', 'nomeSelecaoP',`${temaAtual == 1 ? "colorLight" : "colorDark"}`)
            nomeSelecao.appendChild(nomeSelecaoTexto)

            const containerFigurinhas = document.createElement('div')
            containerFigurinhas.classList.add('conteinerFigurinhas')
            containerFigurinhas.id = `figurinhas${selecao.nomeSelecao}`

            const containerSelecao = document.createElement('div')
            containerSelecao.classList.add('conteinerSelecao')
            containerSelecao.id = `${selecao.nomeSelecao}`
            containerSelecao.appendChild(nomeSelecao)
            containerSelecao.appendChild(containerFigurinhas)

            grupoContainer.appendChild(containerSelecao)

            for(figurinha of selecao.figurinha){

                const nomeFigurinhaTexto = document.createTextNode(figurinha.nomeFigurinha)
                const nomeFigurinha = document.createElement('p')
                nomeFigurinha.classList.add('texto', `${temaAtual == 1 ? "colorLight" : "colorDark"}`)
                nomeFigurinha.appendChild(nomeFigurinhaTexto)

                const quantidadeFigurinhaTexto = document.createTextNode(figurinha.quantidade)
                const quantidadeFigurinha = document.createElement('p')
                quantidadeFigurinha.classList.add('texto',`${temaAtual == 1 ? "colorLight" : "colorDark"}`)
                quantidadeFigurinha.appendChild(quantidadeFigurinhaTexto)
                quantidadeFigurinha.id = (`qntd${figurinha.nomeFigurinha}`)

                const botaoAdicionaTexto = document.createTextNode("+")
                const botaoAdiciona = document.createElement('p')
                botaoAdiciona.classList.add('adiciona')
                botaoAdiciona.id = figurinha.nomeFigurinha
                botaoAdiciona.appendChild(botaoAdicionaTexto)
                botaoAdiciona.addEventListener('click', function adicionar(e){
                    var nome = e.target.id
                    alteraQuantidadeFigurinha(nome,1,'normal')
                })

                

                const botaoDeletaTexto = document.createTextNode("-")
                const botaoDeleta = document.createElement('p')
                botaoDeleta.classList.add('deleta')
                botaoDeleta.id = figurinha.nomeFigurinha
                botaoDeleta.appendChild(botaoDeletaTexto)
                botaoDeleta.addEventListener('click', function adicionar(e){
                    var nome = e.target.id
                    alteraQuantidadeFigurinha(nome,2,'normal')
                })


                const addOuDeletaConteiner = document.createElement('div')
                addOuDeletaConteiner.classList.add('addOuDeletaConteiner')
                addOuDeletaConteiner.id = 'addOuDeleta'
                addOuDeletaConteiner.appendChild(botaoAdiciona)
                addOuDeletaConteiner.appendChild(botaoDeleta)

                const figurinhaContainer = document.createElement('div')
                figurinhaContainer.classList.add('figurinha',`${temaAtual == 1 ? "figurinhaLight" : "figurinhaDark"}`,`${figurinha.quantidade >= 1 ? "possuiFigurinha" : "naoPossui"}`)
                figurinhaContainer.id = (`container${figurinha.nomeFigurinha}`)
                figurinhaContainer.appendChild(nomeFigurinha)
                figurinhaContainer.appendChild(quantidadeFigurinha)
                figurinhaContainer.appendChild(addOuDeletaConteiner)

                containerFigurinhas.appendChild(figurinhaContainer)
            }
        }
    }

    
}





function montaLegends(){
    

    for(jogador of legends.jogadores){
        const tituloGrupoTexto = document.createTextNode(jogador.nome)
        const tituloGrupo = document.createElement('p')
        tituloGrupo.appendChild(tituloGrupoTexto)

        const grupoHeader = document.createElement('div')
        grupoHeader.classList.add('grupo')
        grupoHeader.appendChild(tituloGrupo)

        const containerFigurinhas = document.createElement('div')
        containerFigurinhas.classList.add('conteinerFigurinhasLegend')
        containerFigurinhas.id = `figurinhas${jogador.nome}`

        const grupoContainer = document.createElement('div')
        grupoContainer.id = jogador.nome
        grupoContainer.classList.add('conteinerGrupo')
        grupoContainer.appendChild(grupoHeader)
        grupoContainer.appendChild(containerFigurinhas)

        principalContainer.appendChild(grupoContainer)

        
        for(tipo of jogador.tipoFigurinhas){
            const nomeFigurinhaTexto = document.createTextNode(tipo.tipo)
                const nomeFigurinha = document.createElement('p')
                nomeFigurinha.classList.add('texto', `${temaAtual == 1 ? "colorLight" : "colorDark"}`)
                nomeFigurinha.appendChild(nomeFigurinhaTexto)

                const quantidadeFigurinhaTexto = document.createTextNode(tipo.quantidade)
                const quantidadeFigurinha = document.createElement('p')
                quantidadeFigurinha.classList.add('texto',`${temaAtual == 1 ? "colorLight" : "colorDark"}`)
                quantidadeFigurinha.appendChild(quantidadeFigurinhaTexto)
                quantidadeFigurinha.id = (`qntd${tipo.id}`)

                const botaoAdicionaTexto = document.createTextNode("+")
                const botaoAdiciona = document.createElement('p')
                botaoAdiciona.classList.add('adiciona')
                botaoAdiciona.style.backgroundColor = tipo.corMais
                botaoAdiciona.id = tipo.id
                botaoAdiciona.appendChild(botaoAdicionaTexto)
                botaoAdiciona.addEventListener('click', function adicionar(e){
                    var nome = e.target.id
                    alteraQuantidadeFigurinha(nome,1,'legend')
                })

                

                const botaoDeletaTexto = document.createTextNode("-")
                const botaoDeleta = document.createElement('p')
                botaoDeleta.classList.add('deleta')
                botaoDeleta.style.backgroundColor = tipo.corMenos
                botaoDeleta.id = tipo.id
                botaoDeleta.appendChild(botaoDeletaTexto)
                botaoDeleta.addEventListener('click', function adicionar(e){
                    var nome = e.target.id
                    alteraQuantidadeFigurinha(nome,2,'legend')
                })


                const addOuDeletaConteiner = document.createElement('div')
                addOuDeletaConteiner.classList.add('addOuDeletaConteiner')
                addOuDeletaConteiner.id = 'addOuDeleta'
                addOuDeletaConteiner.appendChild(botaoAdiciona)
                addOuDeletaConteiner.appendChild(botaoDeleta)

                const figurinhaContainer = document.createElement('div')
                figurinhaContainer.classList.add('figurinha',`${temaAtual == 1 ? "figurinhaLight" : "figurinhaDark"}`,`${tipo.quantidade >= 1 ? "possuiFigurinha" : "naoPossui"}`)
                figurinhaContainer.id = (`container${tipo.id}`)
                figurinhaContainer.appendChild(nomeFigurinha)
                figurinhaContainer.appendChild(quantidadeFigurinha)
                figurinhaContainer.appendChild(addOuDeletaConteiner)

                containerFigurinhas.appendChild(figurinhaContainer)



            
        }
    }
    
}

function montaEstatisticas(){
    const containerEstatisticas = document.createElement('div')
    containerEstatisticas.classList.add('containerEstatisticas')

    const alinhaContainerEstatisticas = document.createElement('div')
    alinhaContainerEstatisticas.classList.add('alinhaContainerEstatisticas')

    principalContainer.appendChild(alinhaContainerEstatisticas)

    /*Seção de criação do card album completo*/

    const containerBandeiraDireita = document.createElement('div')
    containerBandeiraDireita.classList.add('metadeBandeiraContainer')
    containerBandeiraDireita.style.backgroundColor = album.corDireita

    const containerBandeiraEsquerda = document.createElement('div')
    containerBandeiraEsquerda.classList.add('metadeBandeiraContainer')
    containerBandeiraEsquerda.style.backgroundColor = album.corEsquerda

    const containerBandeiraCompleta = document.createElement('div')
    containerBandeiraCompleta.classList.add('containerBandeira')
    containerBandeiraCompleta.appendChild(containerBandeiraEsquerda)
    containerBandeiraCompleta.appendChild(containerBandeiraDireita)

    const nomeSelecao = document.createElement('p')
    nomeSelecao.innerText = "Album Completo"
    nomeSelecao.classList.add('textoNomeSelecao', 'texto',`${temaAtual == 1 ? "colorLight" : "colorDark"}`)

    const cardSelecao = document.createElement('div')
    cardSelecao.classList.add(`${temaAtual == 1 ? "cardSelecaoLight" : "cardSelecaoDark"}`,'card')

    const containerInfoSelecao = document.createElement('div')
    containerInfoSelecao.classList.add('containerInfoSelecao')
    containerInfoSelecao.appendChild(containerBandeiraCompleta)
    containerInfoSelecao.appendChild(nomeSelecao)

    const porcentagemConcluida = document.createElement('p')
    porcentagemConcluida.innerText = `${album.quantidadeTotal}/120`
    porcentagemConcluida.classList.add('textoPorcentagemConcluida')
                
    const quantidadeConcluida = document.createElement('p')
    quantidadeConcluida.innerText = `${((album.quantidadeTotal*100)/120).toFixed(2)}%`
    quantidadeConcluida.classList.add('textoQuantidadeConcluida')

    const containerEstatisticasSelecao = document.createElement('div')
    containerEstatisticasSelecao.classList.add('containerEstatisticasSelecao')
    containerEstatisticasSelecao.appendChild(porcentagemConcluida)
    containerEstatisticasSelecao.appendChild(quantidadeConcluida)

                

    cardSelecao.appendChild(containerInfoSelecao)
    cardSelecao.appendChild(containerEstatisticasSelecao)

                
    containerEstatisticas.appendChild(cardSelecao)

    alinhaContainerEstatisticas.appendChild(containerEstatisticas)

    /*Seção de criação do card album legends*/

    const containerGIFLegends = document.createElement('div')
    containerGIFLegends.classList.add('metadeBandeiraContainer')
    containerGIFLegends.style.backgroundColor = album.corEsquerda

    const containerLegends = document.createElement('div')
    containerLegends.classList.add('containerBandeira')
    containerLegends.appendChild(containerGIFLegends)
    

    const nomeAlbumLegends = document.createElement('p')
    nomeAlbumLegends.innerText = "Album Legends"
    nomeAlbumLegends.classList.add('textoNomeSelecao', 'texto',`${temaAtual == 1 ? "colorLight" : "colorDark"}`)

    const cardLegends = document.createElement('div')
    cardLegends.classList.add(`${temaAtual == 1 ? "cardSelecaoLight" : "cardSelecaoDark"}`,'card')

    const containerInfoLegends = document.createElement('div')
    containerInfoLegends.classList.add('containerInfoSelecao')
    containerInfoLegends.appendChild(containerLegends)
    containerInfoLegends.appendChild(nomeAlbumLegends)

    const porcentagemConcluidaLegends = document.createElement('p')
    porcentagemConcluidaLegends.innerText = `${legends.quantidadeLegendsTotal}/16`
    porcentagemConcluidaLegends.classList.add('textoPorcentagemConcluida')
                
    const quantidadeConcluidaLegends = document.createElement('p')
    quantidadeConcluidaLegends.innerText = `${((legends.quantidadeLegendsTotal*100)/16).toFixed(2)}%`
    quantidadeConcluidaLegends.classList.add('textoQuantidadeConcluida')

    const containerEstatisticasLegends = document.createElement('div')
    containerEstatisticasLegends.classList.add('containerEstatisticasSelecao')
    containerEstatisticasLegends.appendChild(porcentagemConcluidaLegends)
    containerEstatisticasLegends.appendChild(quantidadeConcluidaLegends)

                

    cardLegends.appendChild(containerInfoLegends)
    cardLegends.appendChild(containerEstatisticasLegends)

                
    containerEstatisticas.appendChild(cardLegends)

    alinhaContainerEstatisticas.appendChild(containerEstatisticas)




    for(grupo of album.grupo){

        for(var selecao of grupo.selecoes){

                const containerBandeiraDireita = document.createElement('img')
                containerBandeiraDireita.setAttribute('src', selecao.enderecoImagem)

                const containerBandeira = document.createElement('div')
                containerBandeira.classList.add('containerBandeira')
                containerBandeira.appendChild(containerBandeiraDireita)

                const nomeSelecao = document.createElement('p')
                nomeSelecao.innerText = selecao.nomeSelecao
                nomeSelecao.classList.add('textoNomeSelecao', 'texto',`${temaAtual == 1 ? "colorLight" : "colorDark"}`)

                const cardSelecao = document.createElement('div')
                cardSelecao.classList.add(`${temaAtual == 1 ? "cardSelecaoLight" : "cardSelecaoDark"}`,'card')

                const containerInfoSelecao = document.createElement('div')
                containerInfoSelecao.classList.add('containerInfoSelecao')
                containerInfoSelecao.appendChild(containerBandeira)
                containerInfoSelecao.appendChild(nomeSelecao)

                const porcentagemConcluida = document.createElement('p')
                porcentagemConcluida.innerText = `${selecao.quantidadeAdquirida}/12`
                porcentagemConcluida.classList.add('textoPorcentagemConcluida')
                
                const quantidadeConcluida = document.createElement('p')
                quantidadeConcluida.innerText = `${((selecao.quantidadeAdquirida*100)/12).toFixed(2)}%`
                quantidadeConcluida.classList.add('textoQuantidadeConcluida')

                const containerEstatisticasSelecao = document.createElement('div')
                containerEstatisticasSelecao.classList.add('containerEstatisticasSelecao')
                containerEstatisticasSelecao.appendChild(porcentagemConcluida)
                containerEstatisticasSelecao.appendChild(quantidadeConcluida)

                

                cardSelecao.appendChild(containerInfoSelecao)
                cardSelecao.appendChild(containerEstatisticasSelecao)

                
                containerEstatisticas.appendChild(cardSelecao)

                alinhaContainerEstatisticas.appendChild(containerEstatisticas)
            
        } 
    }

    
    
}



function trocaHTML(paginaEscolhida){
    while (principalContainer.firstChild) {
        principalContainer.removeChild(principalContainer.lastChild);
    } 

    if(paginaEscolhida == "figurinhas"){
        montaAlbum()
    }else if(paginaEscolhida == "legends"){
        montaLegends()
        
    }else if(paginaEscolhida == "estatisticas"){
        montaEstatisticas()
    }else{
        console.log('nao entrou')
    }
    
}



/*BUILDER DE DOM*/
function montaDomInicial(){
    montaHeader()
    body.appendChild(principalContainer)
    montaAlbum()


}

montaDomInicial()























