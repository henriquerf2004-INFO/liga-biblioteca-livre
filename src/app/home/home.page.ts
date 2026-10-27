import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LivroCardComponent } from '../components/livro-card/livro-card.component';
import { LivroService, Livro } from '../services/livro.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [CommonModule, LivroCardComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HomePage implements OnInit {
  mensagem: string = '';
  livros: Livro[] = [];

  constructor(private livroService: LivroService) {}

  ngOnInit() {
    this.livros = this.livroService.getLivros();
  }

  emprestarLivro(livro: Livro) {
    const sucesso = this.livroService.emprestar(livro.id);
    if (sucesso) {
      this.mensagem = 'Empréstimo registrado';
    }
  }

  sair() {
    // Ação simulada de sair
  }

  obterTotalDisponiveis(): number {
    return this.livros.filter(l => l.status === 'disponível').length;
  }
}