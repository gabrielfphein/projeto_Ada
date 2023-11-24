"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Livro = void 0;
var Livro = /** @class */ (function () {
    function Livro(titulo, autor, anoPublicacao, genero) {
        this.emprestado = false;
        this.titulo = titulo;
        this.autor = autor;
        this.anoPublicacao = anoPublicacao;
        this.genero = genero;
    }
    Livro.prototype.emprestar = function () {
        if (!this.emprestado) {
            this.emprestado = true;
            console.log("Livro \"".concat(this.titulo, "\" emprestado."));
        }
        else {
            console.log("Livro \"".concat(this.titulo, "\" j\u00E1 est\u00E1 emprestado."));
        }
    };
    Livro.prototype.devolver = function () {
        if (this.emprestado) {
            this.emprestado = false;
            console.log("Livro \"".concat(this.titulo, "\" devolvido."));
        }
        else {
            console.log("Livro \"".concat(this.titulo, "\" n\u00E3o est\u00E1 emprestado."));
        }
    };
    return Livro;
}());
exports.Livro = Livro;
