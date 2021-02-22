import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsDatePipe } from './newsDate/news-date.pipe';



@NgModule({
  declarations: [NewsDatePipe],
  imports: [
    CommonModule
  ],
  exports: [
    NewsDatePipe
  ]
})

export class PipesModule { };