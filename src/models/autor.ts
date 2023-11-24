import { Livro } from './livro';

export class Autor {
  nome: string;
  dataNascimento: string;
  nacionalidade: string;
  livros: Livro[] = [];

  constructor(nome: string, dataNascimento: string, nacionalidade: string) {
    this.nome = nome;
    this.dataNascimento = dataNascimento;
    this.nacionalidade = nacionalidade;
  }

  adicionarLivro(livro: Livro): void {
    this.livros.push(livro);
    console.log(`Livro "${livro.titulo}" adicionado ao autor ${this.nome}.`);
  }

  removerLivro(livro: Livro): void {
    const index = this.livros.indexOf(livro);
    if (index !== -1) {
      this.livros.splice(index, 1);
      console.log(`Livro "${livro.titulo}" removido do autor ${this.nome}.`);
    } else {
      console.log(`Livro "${livro.titulo}" não encontrado no autor ${this.nome}.`);
    }
  }
}
