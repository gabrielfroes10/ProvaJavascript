function mostrarMensagemEmSegundos(mensagem){
    setTimeout(() => {
        console.log(mensagem)
    }, 5000)
    
}

mostrarMensagemEmSegundos("Carregado")