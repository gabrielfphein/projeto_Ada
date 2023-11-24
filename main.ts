import { Biblioteca } from './src/services/biblioteca';
import * as readlineSync from 'readline-sync';

const biblioteca = new Biblioteca();

function exibirMenu(): void {
  console.log('\n*** Menu ***');
  console.log('1. Adicionar Livro');
  console.log('2. Emprestar Livro');
  console.log('3. Devolver Livro');
  console.log('4. Listar Livros Disponíveis');
  console.log('5. Sair');
}

function adicionarLivro(): void {
  const titulo = readlineSync.question('Digite o título do livro: ');
  const autorNome = readlineSync.question('Digite o nome do autor: ');
  const autorNascimento = readlineSync.question('Digite a data de nascimento do autor: ');
  const autorNacionalidade = readlineSync.question('Digite a nacionalidade do autor: ');
  const anoPublicacao = Number(readlineSync.question('Digite o ano de publicação: '));
  const genero = readlineSync.question('Digite o gênero do livro: ');

  biblioteca.adicionarLivro(titulo, autorNome, autorNascimento, autorNacionalidade, anoPublicacao, genero);
}

function emprestarLivro(): void {
  const usuarioNome = readlineSync.question('Digite o nome do usuário: ');
  const usuarioEmail = readlineSync.question('Digite o e-mail do usuário: ');

  biblioteca.emprestarLivro(usuarioNome, usuarioEmail);
}

function devolverLivro(): void {
  const usuarioNome = readlineSync.question('Digite o nome do usuário: ');
  const usuarioEmail = readlineSync.question('Digite o e-mail do usuário: ');

  biblioteca.devolverLivro(usuarioNome, usuarioEmail);
}

function listarLivrosDisponiveis(): void {
  biblioteca.listarLivrosDisponiveis();
}

function fecharPrograma(): void {
  console.log('Programa encerrado.');
  process.exit();
}

function iniciar(): void {
  exibirMenu();

  const opcao = readlineSync.question('Escolha uma opção: ');

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
