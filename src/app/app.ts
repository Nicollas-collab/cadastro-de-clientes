import { Component, signal } from '@angular/core';
import { CadastroDePessoas } from './cadastro-de-pessoas/cadastro-de-pessoas';
@Component({
  selector: 'app-root',
  imports: [ CadastroDePessoas],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('crud_pessoas');
}
