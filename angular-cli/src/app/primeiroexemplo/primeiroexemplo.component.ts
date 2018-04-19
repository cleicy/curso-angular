import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-primeiroexemplo',
  templateUrl: './primeiroexemplo.component.html',
  styleUrls: ['./primeiroexemplo.component.css']
})
export class PrimeiroexemploComponent implements OnInit {

  nome: string = '';

  constructor() { }

  ngOnInit() {
  }

  public atualizaNome(novoNome: Event) {
    this.nome = (<HTMLInputElement>novoNome.target).value;
  }

}
