import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { TheNewsComponent } from './the-news/the-news.component';
import { RouterModule } from '@angular/router';
import { PipesModule } from '../pipes/pipes.module';
import { HeadboardComponent } from './headboard/headboard.component';



@NgModule({
  declarations: [MenuComponent, TheNewsComponent, HeadboardComponent],
  imports: [
    CommonModule,
    RouterModule,
    PipesModule
  ],
  exports: [
    MenuComponent,
    TheNewsComponent,
    HeadboardComponent
  ]
})

export class ComponentsModule { };
