import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { ErrorComponent } from './pages/error/error.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { LoginComponent } from './pages/login/login.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { AnimeNewsComponent } from './pages/anime-news/anime-news.component';
import { MangaNewsComponent } from './pages/manga-news/manga-news.component';
import { ForoComponent } from './pages/foro/foro.component';


const routes: Routes=[


  {
    path:'inicio',
    component: InicioComponent
  },
  {
    path:'error',
    component: ErrorComponent
  },
  {
    path:'contacto',
    component: ContactoComponent
  },
  {
    path:'login',
    component: LoginComponent
  },
  {
    path:'registro',
    component: RegistroComponent
  },
  {
    path:'animeNews',
    component: AnimeNewsComponent
  },
  {
    path:'mangaNews',
    component: MangaNewsComponent
  },
  {
    path:'foro',
    component: ForoComponent
  },
  {
    path:'**',
    redirectTo:'inicio'
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
