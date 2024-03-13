let pessoa = {
    nome: "Gabriel",
    nascimento: "11/02/2012",
    cpf: "999999999"
}

let aluno = {
    ...pessoa,
    matricula: "123",
    notas: [09, 07, 10, 06],
    calcular_media: function() {
        aluno.media = 0
        this.notas.forEach(nota => {
            aluno.media += nota
        })
        aluno.media = aluno.media / this.notas.length
        console.log(aluno.media)
    }

}

console.log(aluno.calcular_media(aluno))
console.log(aluno)

