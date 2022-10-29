import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JohnVersesPageRoutingModule } from './john-verses-routing.module';

import { JohnVersesPage } from './john-verses.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JohnVersesPageRoutingModule
  ],
  declarations: [JohnVersesPage]
})
export class JohnVersesPageModule {}
