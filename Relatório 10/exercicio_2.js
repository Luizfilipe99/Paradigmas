class Produto {
    constructor(nome, preco) {
        this.nome = nome;
        this.preco = preco;
    }
}

class Carrinho {
    constructor() {
        this.produtos = [];
    }

    adicionarProduto(produto) {
        this.produtos.push(produto);
        console.log(`${produto.nome} (Є${produto.preco}) adicionado ao carrinho.`);
    }

    calcularTotal() {
        // Usa o reduce() para somar o preço de todos os produtos no array
        // acc (acumulador) começa em 0
        const total = this.produtos.reduce((acc, produto) => acc + produto.preco, 0);
        return total;
    }
}

// MAIN - Testando o código
const meuCarrinho = new Carrinho();
const produto1 = new Produto("Teclado Mecânico", 120.50);
const produto2 = new Produto("Rato Gaming", 45.00);
const produto3 = new Produto("Monitor", 250.00);

meuCarrinho.adicionarProduto(produto1);
meuCarrinho.adicionarProduto(produto2);
meuCarrinho.adicionarProduto(produto3);

console.log(`O total do carrinho é: Є${meuCarrinho.calcularTotal().toFixed(2)}`);