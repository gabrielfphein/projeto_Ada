"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Usuario = void 0;
var Usuario = /** @class */ (function () {
    function Usuario(nome, email) {
        this.livrosEmprestados = [];
        this.nome = nome;
        this.email = email;
    }
    Usuario.prototype.emprestarLivro = function (livro) {
        if (!livro.emprestado) {
            livro.emprestar();
            this.livrosEmprestados.push(livro);
            console.log("Livro \"".concat(livro.titulo, "\" emprestado para ").concat(this.nome, "."));
        }
        else {
            console.log("Livro \"".concat(livro.titulo, "\" j\u00E1 est\u00E1 emprestado."));
        }
    };
    Usuario.prototype.devolverLivro = function (livro) {
        var index = this.livrosEmprestados.indexOf(livro);
        if (index !== -1) {
            livro.devolver();
            this.livrosEmprestados.splice(index, 1);
            console.log("Livro \"".concat(livro.titulo, "\" devolvido por ").concat(this.nome, "."));
        }
        else {
            console.log("Livro \"".concat(livro.titulo, "\" n\u00E3o est\u00E1 emprestado para ").concat(this.nome, "."));
        }
    };
    return Usuario;
}());
exports.Usuario = Usuario;
