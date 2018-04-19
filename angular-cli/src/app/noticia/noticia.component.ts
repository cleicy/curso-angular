import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-noticia',
  templateUrl: './noticia.component.html',
  styleUrls: ['./noticia.component.css']
})
export class NoticiaComponent implements OnInit {

  noticia: string[] = [
    "Noticia 1",
    "Noticia 2",
    "Noticia 3",
    "Noticia 4"];

  mostrarNoticia: boolean = true;

  titulo: string = 'Olá, Accenturianos!';
  texto: string = 'Neste mês, jovens mulheres destemidas encaram um novo desafio no mundo de TI. Bora #TimeAngular!';
  caminho_imagem: string ='../../assets/img/accenture_logo.png';

  constructor() { }

  ngOnInit() {
  }

  public esconderNoticia() {
    this.mostrarNoticia = false;
  }

  public mostrarNoticias() {
    this.mostrarNoticia = true;
}

}