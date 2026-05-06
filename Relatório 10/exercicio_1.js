// Classes base
class Livro {
    constructor(titulo, autor) {
        this.titulo = titulo;
        this.autor = autor;
        this.disponivel = true; // Por padrão, o livro está disponível
    }
}

class Usuario {
    constructor(nome) {
        this.nome = nome;
        this.livrosEmprestados = []; // Inicializa com um array vazio
    }
}

class Biblioteca {
    constructor() {
        this.catalogo = [];
    }

    adicionarLivro(livro) {
        this.catalogo.push(livro);
    }

    emprestarLivro(titulo, usuario) {
        // Usa o método find() para procurar o livro pelo título e verificar se está disponível
        const livroEncontrado = this.catalogo.find(l => l.titulo === titulo && l.disponivel);

        if (livroEncontrado) {
            livroEncontrado.disponivel = false; // Altera o estado
            usuario.livrosEmprestados.push(livroEncontrado); // Adiciona à lista do utilizador
            console.log(`Sucesso: O livro '${titulo}' foi emprestado a ${usuario.nome}.`);
        } else {
            console.log(`Erro: O livro '${titulo}' não foi encontrado ou já está emprestado.`);
        }
    }
}

// MAIN - Testando o código
const minhaBiblioteca = new Biblioteca();
const livro1 = new Livro("O Senhor dos Anéis", "J.R.R. Tolkien");
const livro2 = new Livro("1984", "George Orwell");

minhaBiblioteca.adicionarLivro(livro1);
minhaBiblioteca.adicionarLivro(livro2);

const utilizador1 = new Usuario("João");

minhaBiblioteca.emprestarLivro("1984", utilizador1);
minhaBiblioteca.emprestarLivro("1984", utilizador1); // Deve falhar na segunda vez
console.log(`${utilizador1.nome} tem os seguintes livros:`, utilizador1.livrosEmprestados);