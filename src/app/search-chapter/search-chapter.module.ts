import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SearchChapterPageRoutingModule } from './search-chapter-routing.module';

import { SearchChapterPage } from './search-chapter.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SearchChapterPageRoutingModule
  ],
  declarations: [SearchChapterPage]
})
export class SearchChapterPageModule {}
