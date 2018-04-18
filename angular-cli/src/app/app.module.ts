import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { TopoComponent } from './topo/topo.component';
import { RodapePComponent } from './rodape-p/rodape-p.component';
import { NoticiaComponent } from './noticia/noticia.component';

@NgModule({
  declarations: [
    TopoComponent,
    AppComponent,
    RodapePComponent,
    NoticiaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
