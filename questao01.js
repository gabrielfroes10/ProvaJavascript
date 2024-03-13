function executarCallback(funcao){
    console.log("Ola, boa tarde")
}

executarCallback(function(mensagem){
    console.log("Mensagem: " + mensagem)
})

