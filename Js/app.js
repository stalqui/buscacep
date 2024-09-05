//criar a função para coletar o cep

function coletar() {
    let input = document.querySelector('.input-cep').value
    Dados(input)
}

//função para consumir API via CEP
async function Dados(input) {
    let dados = await fetch(`https://viacep.com.br/ws/${input}/json/`).then(response => response.json())
    Exibirdados(dados)
}

//função inserir dados na tela
function Exibirdados(dados) {
    document.querySelector('.Estado').value = dados.uf;
    document.querySelector('.cidade').value = dados.localidade;
    document.querySelector('.endereco').value = dados.logradouro
    document.querySelector('.ddd').value = dados.ddd
}