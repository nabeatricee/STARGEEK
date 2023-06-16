var listaFilmes = []

listaFilmes = JSON.parse(localStorage.getItem('bbFilmes'))
if (listaFilmes == null) {
    listaFilmes = []
}
exibirFilmes()

function exibirFoto(){
    var imagem = document.getElementById('nrm2').value
    document.getElementById('foto').src = imagem
}

function exibirFilmes(){
    document.getElementById('jubalinha').innerHTML = ""
    
    listaFilmes.forEach((item, indice) =>{
    document.getElementById("jubalinha").innerHTML += `<div><img src="${item.link}" class="imgpp">
    <img src="/STARGEEK/img/excluir.svg" class='excluir' onclick='excluirFilme(${indice})'>
    </div>`
} )
}

function excluirFilme(indice){
    
    if(confirm("Deseja realmente excluir ?") == true){
        listaFilmes.splice(indice, 1)
        localStorage.setItem('bbFilmes', JSON.stringify(listaFilmes))
        exibirFilmes()
    }
    else{
        return false
    }
   
}