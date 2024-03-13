let alunos = [
    {nome: "Joao" , nascimento: "14/07/2005", cpf: "111111", matricula: "123", notas: [10, 04, 03, 08], calcular_media: function() {
        alunos.media = 0
        this.notas.forEach(nota => {
            alunos.media += nota
        })
        alunos.media = alunos.media / this.notas.length
        console.log(alunos.media)
    }
},
    
    { nome: "tiao" , nascimento: "18/02/2005", cpf: "22222", matricula: "456", notas: [08, 07, 07, 02], calcular_media: function() {
        alunos.media = 0
        this.notas.forEach(nota => {
            alunos.media += nota
        })
        alunos.media = alunos.media / this.notas.length
        console.log(alunos.media)
    }
},
    
    { nome: "carlin" , nascimento: "22/09/2005", cpf: "33333", matricula: "789", notas: [05, 04, 07, 01], calcular_media: function() {
        alunos.media = 0
        this.notas.forEach(nota => {
            alunos.media += nota
        })
        alunos.media = alunos.media / this.notas.length
        console.log(alunos.media)
    }
},

    { nome: "Jaksu" , nascimento: "21/01/2005", cpf: "44444", matricula: "012", notas: [10, 10, 10, 10], calcular_media: function() {
        alunos.media = 0
        this.notas.forEach(nota => {
            alunos.media += nota
        })
        alunos.media = alunos.media / this.notas.length
        console.log(alunos.media)
    }
},
]

function CalculaMediaGeral(alunos) {
    let MediaGeral = 0
    let MenorMedia = null
    let MaiorMedia = null

    alunos.forEach(aluno => {
        aluno.calcular_media()
        MediaGeral = MediaGeral += aluno.media
        if(MenorMedia == null) {
            MenorMedia = aluno.media
        }else {
            if(aluno.media < MenorMedia) {
                MenorMedia = aluno.media
            }
        }

        if(MaiorMedia == null){
            MaiorMedia = aluno.media
        }else{
            if(aluno.media > MaiorMedia){
                MaiorMedia = aluno.media
            }
        }

    })
    MediaGeral /= alunos.length

    return {"Media geral" : MediaGeral,"Menor media" : MenorMedia,"Maior Media" : MaiorMedia}
        
}

console.log(CalculaMediaGeral(alunos))