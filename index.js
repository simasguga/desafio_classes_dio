// DESAFIO ESCREVENDO CLASSES DE UM JOGO

class heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }
    atacou() {
        let tiposAtaque = ["magia", "espada", "arte marciais", "shuriken"]
        let ataque = "";
        if(this.tipo === "mago") {
            ataque = tiposAtaque[0]
        } else if(this.tipo === "guerreiro") {
            ataque = tiposAtaque[1]
        } else if(this.tipo === "monge") {
            ataque = tiposAtaque[2]
        } else if(this.tipo === "ninja") {
            ataque = tiposAtaque[3]
        }
        console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }

    tipoHeroi() {
        if (this.tipo === "mago") {
            return "Mago";
        } else if (this.tipo === "guerreiro") {
            return "Guerreiro";
        } else if (this.tipo === "monge") {
            return "Monge";
        } else if(this.tipo === "ninja"){
            return "Ninja";
        }
    }
}

let heroiJorge = new heroi("Jorge", 35, "guerreiro")

heroiJorge.atacou()
