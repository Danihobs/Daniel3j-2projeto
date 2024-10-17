const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/dados-globais.json'

async function visualizadorDadosGlobais(){
    const res = await fetch(url);
    const dados = await res.json()
    console.log(dados)
    const paragrafo =document.createElement('p');
    //*cria um elemento<p> no HTML;
    paragrafo.classList.add('graficos-texto')
}
visualizadorDadosGlobais();