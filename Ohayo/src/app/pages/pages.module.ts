import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioComponent } from './inicio/inicio.component';
import { ErrorComponent } from './error/error.component';
import { ContactoComponent } from './contacto/contacto.component';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { AnimeNewsComponent } from './anime-news/anime-news.component';
import { MangaNewsComponent } from './manga-news/manga-news.component';
import { ForoComponent } from './foro/foro.component';



@NgModule({
  declarations: [
    InicioComponent,
    ErrorComponent,
    ContactoComponent,
    LoginComponent,
    RegistroComponent,
    AnimeNewsComponent,
    MangaNewsComponent,
    ForoComponent,
  ],
  imports: [
    CommonModule
  ],
  exports:[
      InicioComponent,
  ]
})
export class PagesModule { }
