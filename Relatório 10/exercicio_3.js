class Personagem {
    constructor(nome, ocupacao) {
        this.nome = nome;
        this.ocupacao = ocupacao;
    }

    trabalhar() {
        console.log(`${this.nome} está a trabalhar como ${this.ocupacao}... ou a tentar não fazer nada.`);
    }
}

class Criatura {
    constructor(nome, nivelPerigo) {
        this.nome = nome;
        this.nivelPerigo = nivelPerigo;
    }

    assustar() {
        console.log(`Cuidado! O ${this.nome} (Perigo: ${this.nivelPerigo}) está a assustar os turistas!`);
    }
}

class Diario {
    constructor() {
        this.registos = [];
    }

    adicionarRegisto(criatura) {
        this.registos.push(criatura);
        console.log(`Nova anomalia registada no diário: ${criatura.nome}.`);
    }
}

class CabanaMisterio {
    constructor(personagens) {
        this.personagens = personagens; // Agregação: recebe os personagens por parâmetro
    }

    listarFuncionarios() {
        console.log("--- Funcionários da Cabana do Mistério ---");
        // Percorre o array com forEach
        this.personagens.forEach(personagem => {
            console.log(`- ${personagem.nome} (${personagem.ocupacao})`);
        });
    }
}

// MAIN - Testando o código
const diario3 = new Diario();
const gnomo = new Criatura("Gnomos", "Alto (se estiverem juntos)");
const multibear = new Criatura("Multi-Bear", "Médio");

diario3.adicionarRegisto(gnomo);
diario3.adicionarRegisto(multibear);

const stan = new Personagem("Grunkle Stan", "Dono/Golpista");
const mabel = new Personagem("Mabel", "Caçadora de Diversão");
const soos = new Personagem("Soos", "Faz-tudo");

// Passando um array de objetos instanciados (Agregação)
const cabana = new CabanaMisterio([stan, mabel, soos]);
cabana.listarFuncionarios();
stan.trabalhar();