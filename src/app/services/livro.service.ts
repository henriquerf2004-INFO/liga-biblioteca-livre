import { Injectable } from '@angular/core';

export interface Livro {
  id: number;
  titulo: string;
  status: 'disponível' | 'emprestado' | 'indisponível';
}

@Injectable({
  providedIn: 'root'
})
export class LivroService {
  private livros: Livro[] = [
    { id: 1, titulo: 'Clean Code (resumo)', status: 'disponível' },
    { id: 2, titulo: 'Dom Casmurro', status: 'disponível' },
    { id: 3, titulo: 'O Guia do Mochileiro', status: 'emprestado' },
    { id: 4, titulo: 'Use a Cabeça Java', status: 'disponível' },
    { id: 5, titulo: 'Comic da turma', status: 'indisponível' }
  ];

  getLivros(): Livro[] {
    return this.livros;
  }

  emprestar(id: number): boolean {
    const livro = this.livros.find(l => l.id === id);
    if (livro && livro.status === 'disponível') {
      livro.status = 'emprestado';
      return true;
    }
    return false;
  }
}