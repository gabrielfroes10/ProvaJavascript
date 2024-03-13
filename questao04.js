const Pessoa = {
    nome: "gabriel",
    sobrenome: "froes",
    nome_completo: function() {
        return this.nome + " " + this.sobrenome
    },
    //Essa função nao funciona pois a arrow function não recebe o contexto do objeto Pessoa
    nomeCompleto2: () => {
        this.nome + " " + this.sobrenome
    }
}

console.log(Pessoa.nome_completo)