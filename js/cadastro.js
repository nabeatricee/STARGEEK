var listaEmail = []

listaEmail = JSON.parse(localStorage.getItem('nr02'))
if (listaEmail == null) {
    listaEmail = []
}

exibirEmail()
console.log(listaEmail)

function valicada(nome, email, senha1, senha2) {
    if (senha1 != senha2){
        alert('As senhas então incorretas')
        return
    }
    if (nome != '' && email != '' && senha1 != '' && senha2 != ''){
        return true
    } else {
        return false
    }
}

function botaoCadast(){
    var nome = document.getElementById('nome').value
    var email = document.getElementById('email').value
    var senha1 = document.getElementById('senha1').value
    var senha2 = document.getElementById('senha2').value

    var cadastro =valicada (nome,email, senha1, senha2)
    if (cadastro == false){
        alert('Verifique seus dados')
        return
    }

    var emaill = {
        nome: nome,
        email: email,
        senha: senha1
    }
    listaEmail.push(emaill)
    localStorage.setItem('nr02', JSON.stringify(listaEmail))

    exibirEmail()

    var nome = document.getElementById('nome').value = ''
    var email = document.getElementById('email').value = ''
    var senha1 = document.getElementById('senha1').value = ''
    var senha2 = document.getElementById('senha2').value = ''
}
