import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

/**
 * var with the page routes with the lazy load directive
 */
const routes: Routes = [
  {
    path: 'start',
    loadChildren: () => import('./pages/start/start.module').then(module => module.StartModule)
  },
  
  {
    path: 'news',
    loadChildren: () => import('./pages/news/news.module').then(module => module.NewsModule)
  },
  {
    path: 'articles',
    loadChildren: () => import('./pages/articles/articles.module').then(module => module.ArticlesModule)
  },
  {
    path: 'suggestions',
    loadChildren: () => import('./pages/suggestions/suggestions.module').then(module => module.SuggestionsModule)
  },
  {
    path: 'errors',
    loadChildren: () => import('./pages/errors/errors.module').then(module => module.ErrorsModule)
  },
  {
    path: '**',
    redirectTo: 'start'
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule { };
