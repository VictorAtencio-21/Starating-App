import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfileModalPageRoutingModule } from './profile-modal-routing.module';

import { ProfileModalPage } from './profile-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfileModalPageRoutingModule
  ],
  declarations: [ProfileModalPage]
})
export class ProfileModalPageModule {}
