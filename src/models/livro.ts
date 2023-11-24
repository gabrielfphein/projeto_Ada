import { Autor } from './autor';

export class Livro {
  titulo: string;
  autor: Autor;
  anoPublicacao: number;
  genero: string;
  emprestado: boolean = false;

  constructor(titulo: string, autor: Autor, anoPublicacao: number, genero: string) {
    this.titulo = titulo;
    this.autor = autor;
    this.anoPublicacao = anoPublicacao;
    this.genero = genero;
  }

  emprestar(): void {
    if (!this.emprestado) {
      this.emprestado = true;
      console.log(`Livro "${this.titulo}" emprestado.`);
    } else {
      console.log(`Livro "${this.titulo}" já está emprestado.`);
    }
  }

  devolver(): void {
    if (this.emprestado) {
      this.emprestado = false;
      console.log(`Livro "${this.titulo}" devolvido.`);
    } else {
      console.log(`Livro "${this.titulo}" não está emprestado.`);
    }
  }
}
