var barras = document.getElementById('imgBarras') //criando variavel e atribuindo imagen do HTML

barras.addEventListener('click', painelEsq) //adicionando evento de click, chama funçao "painelEsq"

var cheqbox = document.querySelector('#chec') //variavel para checar se checkbox esta habilitada ou nao

function painelEsq() {  //funçao "painelEsc"

    let painel = document.querySelector('#painel-dir')

    if (cheqbox.checked) {  //se checkbox estiver habilitada atribui class ao elemento painel
        painel.classList.remove('positivo') //isso fara ele aparecer na tela
        painel.classList.add('negativo')

    } else {
        painel.classList.remove('negativo') //caso desabilitado remove class
        painel.classList.add('positivo')  //e fara o painel se esconder a direita!

    }
}

var botaoFiltro = document.querySelector('#BotoesFiltros') //mecanismo para quando clicar em link do filtro..
botaoFiltro.addEventListener('click', RemoverCheck)     // o painel esconde-se novamente

function RemoverCheck(){
   cheqbox.checked = false

   let painel = document.querySelector('#painel-dir')
    painel.classList.remove('positivo') //caso desabilitado remove class
    painel.classList.add('negativo')  //e fara o painel se esconder a direita!

}