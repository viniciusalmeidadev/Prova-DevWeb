
const tabela = document.createElement('table')
tabela.classList.add('tabelaCompletados')


async function pegaUsuariosCompletados(){
    const url = 'https://fakerapi.it/api/v1/persons?_quantity=15'

    const response = await fetch(url)
    .then(data => data.json())
    .catch(err => console.log(err))

    const cabecalhoNome = document.createElement('th')
    cabecalhoNome.innerText = 'Colecionador'

    const cabecalhoPais = document.createElement('th')
    cabecalhoPais.innerText = 'País'

    const colunaCabecalho = document.createElement('tr')
    colunaCabecalho.appendChild(cabecalhoNome)
    colunaCabecalho.appendChild(cabecalhoPais)

    
   
    
    tabela.appendChild(colunaCabecalho)
    
    

    for(colecionador of response.data){

        const {firstname, lastname, address: {country}} = colecionador

        const linhaNome = document.createElement('td')
        linhaNome.innerText = `${firstname}  ${lastname}`

        const linhaPais = document.createElement('td')
        linhaPais.innerText = country

        const linhaColecionador = document.createElement('tr')
        linhaColecionador.appendChild(linhaNome)
        linhaColecionador.appendChild(linhaPais)

        tabela.appendChild(linhaColecionador)
        
    }

}

pegaUsuariosCompletados()