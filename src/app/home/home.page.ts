import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LivroCardComponent } from '../components/livro-card/livro-card.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [CommonModule, LivroCardComponent],
})
export class HomePage {
  mensagem: string = '';
  
  livros = [
    { id: 1, titulo: 'Clean Code (resumo)', status: 'disponível' },
    { id: 2, titulo: 'Dom Casmurro', status: 'disponível' },
    { id: 3, titulo: 'O Guia do Mochileiro', status: 'emprestado' },
    { id: 4, titulo: 'Use a Cabeça Java', status: 'disponível' },
    { id: 5, titulo: 'Comic da turma', status: 'indisponível' }
  ];

  emprestarLivro(livro: any) {
    livro.status = 'emprestado';
    this.mensagem = 'Empréstimo registrado';
  }

  sair() {
    // Ação de sair
  }
}