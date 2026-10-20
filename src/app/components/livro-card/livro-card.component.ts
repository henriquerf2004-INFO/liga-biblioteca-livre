import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-livro-card',
  templateUrl: './livro-card.component.html',
  styleUrls: ['./livro-card.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class LivroCardComponent {
  @Input() livro: any; 
  @Output() emprestar = new EventEmitter<any>(); 

  onEmprestar() {
    this.emprestar.emit(this.livro);
  }
}