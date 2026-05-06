class Hunter {
    constructor(nome) {
        this.nome = nome;
    }

    // Método genérico
    lutar() {
        console.log(`${this.nome} está a usar os princípios básicos de Nen.`);
    }
}

// HERANÇA e POLIMORFISMO (Sobrescrita do método lutar)
class Gon extends Hunter {
    lutar() {
        console.log(`${this.nome} foca a sua aura e ataca com: Jajanken! (Pedra, Papel, Tesoura)`);
    }
}

class Killua extends Hunter {
    lutar() {
        console.log(`${this.nome} envolve-se em eletricidade e ataca usando: Godspeed (Kanmuru)!`);
    }
}

class Kurapika extends Hunter {
    lutar() {
        console.log(`${this.nome} manifesta as suas correntes: Chain Jail ativada!`);
    }
}

class TrupeFantasma {
    constructor(nome, membros) {
        this.nome = nome;
        this.membros = membros;
    }

    revelarMembros() {
        console.log(`--- Membros da ${this.nome} ---`);
        this.membros.forEach(membro => {
            console.log(`Aranha detetada: ${membro}`);
        });
    }
}

// MAIN - Testando o código
const gon = new Gon("Gon Freecss");
const killua = new Killua("Killua Zoldyck");
const kurapika = new Kurapika("Kurapika");

// Graças ao polimorfismo, cada Hunter reage de maneira diferente ao mesmo método
console.log("--- Batalha Iminente ---");
gon.lutar();
killua.lutar();
kurapika.lutar();

console.log("\n");

const trupe = new TrupeFantasma("Trupe Fantasma (Aranhas)", ["Chrollo Lucilfer", "Hisoka Morow", "Feitan Portor", "Machi Komacine"]);
trupe.revelarMembros();