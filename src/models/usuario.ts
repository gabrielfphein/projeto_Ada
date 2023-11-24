import { Livro } from './livro';

export class Usuario {
  nome: string;
  email: string;
  livrosEmprestados: Livro[] = [];

  constructor(nome: string, email: string) {
    this.nome = nome;
    this.email = email;
  }

  emprestarLivro(livro: Livro): void {
    if (!livro.emprestado) {
      livro.emprestar();
      this.livrosEmprestados.push(livro);
      console.log(`Livro "${livro.titulo}" emprestado para ${this.nome}.`);
    } else {
      console.log(`Livro "${livro.titulo}" já está emprestado.`);
    }
  }

  devolverLivro(livro: Livro): void {
    const index = this.livrosEmprestados.indexOf(livro);
    if (index !== -1) {
      livro.devolver();
      this.livrosEmprestados.splice(index, 1);
      console.log(`Livro "${livro.titulo}" devolvido por ${this.nome}.`);
    } else {
      console.log(`Livro "${livro.titulo}" não está emprestado para ${this.nome}.`);
    }
  }
}
