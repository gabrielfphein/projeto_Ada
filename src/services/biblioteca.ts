import { Autor } from '../models/autor';
import { Livro } from '../models/livro';
import { Usuario } from '../models/usuario';

export class Biblioteca {
  livros: Livro[] = [];
  autores: Autor[] = [];
  usuarios: Usuario[] = [];
  listarLivrosDisponiveis: any;
  devolverLivro: any;

  adicionarLivro(titulo: string, autorNome: string, autorNascimento: string, autorNacionalidade: string, anoPublicacao: number, genero: string): void {
    const autor = this.encontrarOuCriarAutor(autorNome, autorNascimento, autorNacionalidade);
    const livro = new Livro(titulo, autor, anoPublicacao, genero);
    this.livros.push(livro);
    autor.adicionarLivro(livro);
    console.log(`Livro "${livro.titulo}" adicionado à biblioteca.`);
  }

  private encontrarOuCriarAutor(nome: string, nascimento: string, nacionalidade: string): Autor {
    let autor = this.autores.find(a => a.nome === nome);
    if (!autor) {
      autor = new Autor(nome, nascimento, nacionalidade);
      this.autores.push(autor);
    }
    return autor!;
  }

  emprestarLivro(usuarioNome: string, usuarioEmail: string): void {
    const usuario = this.encontrarOuCriarUsuario(usuarioNome, usuarioEmail);
    // Lógica para emprestar livro...
  }

  private encontrarOuCriarUsuario(nome: string, email: string): Usuario {
    let usuario = this.usuarios.find(u => u.nome === nome && u.email === email);
    if (!usuario) {
      usuario = new Usuario(nome, email);
      this.usuarios.push(usuario);
    }
    return usuario!;
  }

  // Métodos restantes...
}
