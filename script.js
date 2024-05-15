const atividades = document.querySelector('#atividades')
const botao = document.querySelector('#botao')

function cadastrarAtividade(e){
    e.preventDefault()
    
    const listagem = document.createElement('li')
    listagem.innerHTML = atividades.value
    document.body.appendChild(listagem)
    
}

botao.addEventListener('click', cadastrarAtividade)

