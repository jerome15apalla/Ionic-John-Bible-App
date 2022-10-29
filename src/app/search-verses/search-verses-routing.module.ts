import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SearchVersesPage } from './search-verses.page';

const routes: Routes = [
  {
    path: '',
    component: SearchVersesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SearchVersesPageRoutingModule {}
