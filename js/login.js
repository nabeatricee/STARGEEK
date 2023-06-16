var listaEmail = []

listaEmail = JSON.parse(localStorage.getItem('nr02'))
if (listaEmail == null) {
    listaEmail = []
}

function Entrar(){
    var email = document.getElementById("emailLogin").value
    var senha = document.getElementById("senhaLogin").value

    var encontrou = false

    listaEmail.forEach(item => {
        if (email == item.email && senha == item.senha) { 
            location.href = 'paginaprincipal.html'
            alert("Bem vindo(a) ao sistema")
            encontrou = true
        }
    })

    if(encontrou == false) {
        alert('Usuário não encontrado')

    }
}

