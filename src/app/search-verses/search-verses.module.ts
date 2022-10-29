import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SearchVersesPageRoutingModule } from './search-verses-routing.module';

import { SearchVersesPage } from './search-verses.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SearchVersesPageRoutingModule
  ],
  declarations: [SearchVersesPage]
})
export class SearchVersesPageModule {}
