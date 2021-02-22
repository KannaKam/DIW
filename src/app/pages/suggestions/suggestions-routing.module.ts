import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SuggestionsComponent } from './suggestions.component';

/**
 * var route with the suggestion component
 */
const routes: Routes = [
  {
    path: '',
    component: SuggestionsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class SuggestionsRoutingModule { };
