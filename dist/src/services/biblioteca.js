"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Biblioteca = void 0;
var autor_1 = require("../models/autor");
var livro_1 = require("../models/livro");
var usuario_1 = require("../models/usuario");
var Biblioteca = /** @class */ (function () {
    function Biblioteca() {
        this.livros = [];
        this.autores = [];
        this.usuarios = [];
        // Métodos restantes...
    }
    Biblioteca.prototype.adicionarLivro = function (titulo, autorNome, autorNascimento, autorNacionalidade, anoPublicacao, genero) {
        var autor = this.encontrarOuCriarAutor(autorNome, autorNascimento, autorNacionalidade);
        var livro = new livro_1.Livro(titulo, autor, anoPublicacao, genero);
        this.livros.push(livro);
        autor.adicionarLivro(livro);
        console.log("Livro \"".concat(livro.titulo, "\" adicionado \u00E0 biblioteca."));
    };
    Biblioteca.prototype.encontrarOuCriarAutor = function (nome, nascimento, nacionalidade) {
        var autor = this.autores.find(function (a) { return a.nome === nome; });
        if (!autor) {
            autor = new autor_1.Autor(nome, nascimento, nacionalidade);
            this.autores.push(autor);
        }
        return autor;
    };
    Biblioteca.prototype.emprestarLivro = function (usuarioNome, usuarioEmail) {
        var usuario = this.encontrarOuCriarUsuario(usuarioNome, usuarioEmail);
        // Lógica para emprestar livro...
    };
    Biblioteca.prototype.encontrarOuCriarUsuario = function (nome, email) {
        var usuario = this.usuarios.find(function (u) { return u.nome === nome && u.email === email; });
        if (!usuario) {
            usuario = new usuario_1.Usuario(nome, email);
            this.usuarios.push(usuario);
        }
        return usuario;
    };
    return Biblioteca;
}());
exports.Biblioteca = Biblioteca;
