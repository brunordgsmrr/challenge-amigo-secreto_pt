//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = []

function adicionarAmigo() {
    const inputField = document.getElementById('amigo')
    if (validaNome(inputField.value)) {
        amigos.push(inputField.value)
    }

    inputField.value = '';
    inputField.focus();
    atualizaLista()
}

function validaNome(nome) {
    if (nome == '') {
        alert("Por favor, insira um nome.")
        return false
    }
    if (amigos.includes(nome)) {
        alert("Este nome já foi adicionado")
        return false
    }
    return true
}

function atualizaLista() {
    const lista = document.getElementById('listaAmigos')
    lista.innerHTML = ""

    amigos.forEach(amigo => {
        let li = document.createElement('li')
        li.textContent = amigo
        lista.appendChild(li)
    })
}

function sortearAmigo() {
    if (amigos.length == 0) {
        alert("Lista de amigos vázia")
        return
    }

    let randomIndex = Math.floor(Math.random() * amigos.length);

    let resultado = document.getElementById('resultado')

    resultado.innerHTML = amigos[randomIndex]
}


