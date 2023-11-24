"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Autor = void 0;
var Autor = /** @class */ (function () {
    function Autor(nome, dataNascimento, nacionalidade) {
        this.livros = [];
        this.nome = nome;
        this.dataNascimento = dataNascimento;
        this.nacionalidade = nacionalidade;
    }
    Autor.prototype.adicionarLivro = function (livro) {
        this.livros.push(livro);
        console.log("Livro \"".concat(livro.titulo, "\" adicionado ao autor ").concat(this.nome, "."));
    };
    Autor.prototype.removerLivro = function (livro) {
        var index = this.livros.indexOf(livro);
        if (index !== -1) {
            this.livros.splice(index, 1);
            console.log("Livro \"".concat(livro.titulo, "\" removido do autor ").concat(this.nome, "."));
        }
        else {
            console.log("Livro \"".concat(livro.titulo, "\" n\u00E3o encontrado no autor ").concat(this.nome, "."));
        }
    };
    return Autor;
}());
exports.Autor = Autor;
