import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SearchChapterPage } from './search-chapter.page';

const routes: Routes = [
  {
    path: '',
    component: SearchChapterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SearchChapterPageRoutingModule {}
