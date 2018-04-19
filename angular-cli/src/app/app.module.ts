import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { TopoComponent } from './topo/topo.component';
import { RodapePComponent } from './rodape-p/rodape-p.component';
import { NoticiaComponent } from './noticia/noticia.component';
import { AlertaComponent } from './alerta/alerta.component';
import { PrimeiroexemploComponent } from './primeiroexemplo/primeiroexemplo.component';
import { SegundoexemploComponent } from './segundoexemplo/segundoexemplo.component';
import { TerceiroexemploComponent } from './terceiroexemplo/terceiroexemplo.component';

@NgModule({
  declarations: [
    TopoComponent,
    AppComponent,
    RodapePComponent,
    NoticiaComponent,
    AlertaComponent,
    PrimeiroexemploComponent,
    SegundoexemploComponent,
    TerceiroexemploComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
