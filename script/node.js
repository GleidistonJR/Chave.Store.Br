var barras = document.getElementById('imgBarras')

barras.addEventListener('click', painelEsq)

function painelEsq() {
    var cheqbox = document.querySelector('#chec')
    var painel = document.querySelector('#painel-esq')

    if (cheqbox.checked) {
        painel.classList.remove('positivo')
        painel.classList.add('negativo')

    } else {
        painel.classList.remove('negativo')
        painel.classList.add('positivo')

    }
}
