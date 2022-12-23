import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CardModule } from './card/card.module';
import { EjercicioModule } from './ejercicio/ejercicio.module';
import { HeaderModule } from './header/header.module';
import { TitleModule } from './title/title.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HeaderModule,
    TitleModule,
    CardModule,
    EjercicioModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
