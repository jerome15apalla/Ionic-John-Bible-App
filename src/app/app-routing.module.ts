import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'john-verses',
    loadChildren: () => import('./john-verses/john-verses.module').then( m => m.JohnVersesPageModule)
  },
  {
    path: 'search-verses',
    loadChildren: () => import('./search-verses/search-verses.module').then( m => m.SearchVersesPageModule)
  },
  {
    path: 'search-chapter',
    loadChildren: () => import('./search-chapter/search-chapter.module').then( m => m.SearchChapterPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
