"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var biblioteca_1 = require("./src/services/biblioteca");
var readlineSync = __importStar(require("readline-sync"));
var biblioteca = new biblioteca_1.Biblioteca();
function exibirMenu() {
    console.log('\n*** Menu ***');
    console.log('1. Adicionar Livro');
    console.log('2. Emprestar Livro');
    console.log('3. Devolver Livro');
    console.log('4. Listar Livros Disponíveis');
    console.log('5. Sair');
}
function adicionarLivro() {
    var titulo = readlineSync.question('Digite o título do livro: ');
    var autorNome = readlineSync.question('Digite o nome do autor: ');
    var autorNascimento = readlineSync.question('Digite a data de nascimento do autor: ');
    var autorNacionalidade = readlineSync.question('Digite a nacionalidade do autor: ');
    var anoPublicacao = Number(readlineSync.question('Digite o ano de publicação: '));
    var genero = readlineSync.question('Digite o gênero do livro: ');
    biblioteca.adicionarLivro(titulo, autorNome, autorNascimento, autorNacionalidade, anoPublicacao, genero);
}
function emprestarLivro() {
    var usuarioNome = readlineSync.question('Digite o nome do usuário: ');
    var usuarioEmail = readlineSync.question('Digite o e-mail do usuário: ');
    biblioteca.emprestarLivro(usuarioNome, usuarioEmail);
}
function devolverLivro() {
    var usuarioNome = readlineSync.question('Digite o nome do usuário: ');
    var usuarioEmail = readlineSync.question('Digite o e-mail do usuário: ');
    biblioteca.devolverLivro(usuarioNome, usuarioEmail);
}
function listarLivrosDisponiveis() {
    biblioteca.listarLivrosDisponiveis();
}
function fecharPrograma() {
    console.log('Programa encerrado.');
    process.exit();
}
function iniciar() {
    exibirMenu();
    var opcao = readlineSync.question('Escolha uma opção: ');
    switch (opcao) {
        case '1':
            adicionarLivro();
            break;
        case '2':
            emprestarLivro();
            break;
        case '3':
            devolverLivro();
            break;
        case '4':
            listarLivrosDisponiveis();
            break;
        case '5':
            fecharPrograma();
            break;
        default:
            console.log('Opção inválida.');
    }
    iniciar();
}
iniciar();
