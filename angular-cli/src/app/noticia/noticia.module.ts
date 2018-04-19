import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'

import { NoticiaComponent } from './noticia.component';
import { PrimeiroexemploComponent } from '../primeiroexemplo/primeiroexemplo.component';
import { SegundoexemploComponent } from '../segundoexemplo/segundoexemplo.component';
import { TerceiroexemploComponent } from '../terceiroexemplo/terceiroexemplo.component';


@NgModule({
  imports: [
    FormsModule,
    CommonModule
  ],
  declarations: [
    NoticiaComponent,
    PrimeiroexemploComponent,
    SegundoexemploComponent,
    TerceiroexemploComponent
  ],
exports: [
  NoticiaComponent,
]
}
)
export class NoticiaModule { }


