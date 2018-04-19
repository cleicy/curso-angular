import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NoticiaModule } from './noticia/noticia.module';

import { AppComponent } from './app.component';
import { TopoComponent } from './topo/topo.component';
import { RodapePComponent } from './rodape-p/rodape-p.component';
import { AlertaComponent } from './alerta/alerta.component';

@NgModule({
  declarations: [
    TopoComponent,
    AppComponent,
    AlertaComponent,
    RodapePComponent
  ],
  imports: [
    BrowserModule,
    NoticiaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
