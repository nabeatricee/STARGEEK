var listaFilmes = []

listaFilmes = JSON.parse(localStorage.getItem('bbFilmes'))
if (listaFilmes == null) {
    listaFilmes = []
}

exibirFilmes()


function validarCadastro(nomeFilme, imagemFilme) {
    if (nomeFilme != '' && imagemFilme != '') {
        return true
    } else {
        return false
    }
}

function midia() {
    var nomeFilme = document.getElementById("nrm1").value
    var imagemFilme = document.getElementById("nrm2").value

    var possoCadastrar = validarCadastro(nomeFilme, imagemFilme)
    if (possoCadastrar == false) {
        alert('Verifique os dados antes de cadastrar')
        return
    }

    var filme = {
        nome: nomeFilme,
        link: imagemFilme
    }

    listaFilmes.push(filme)
    localStorage.setItem('bbFilmes', JSON.stringify(listaFilmes))
    alert("Mídia Cadastrada")
    location.href = 'minhalista.html'
    exibirFilmes()

    document.getElementById("nrm1").value = ''
    document.getElementById("nrm2").value = ''
    document.getElementById("nrm1").focus()
}

