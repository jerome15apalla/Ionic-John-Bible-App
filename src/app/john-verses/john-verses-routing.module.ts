import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JohnVersesPage } from './john-verses.page';

const routes: Routes = [
  {
    path: '',
    component: JohnVersesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JohnVersesPageRoutingModule {}
