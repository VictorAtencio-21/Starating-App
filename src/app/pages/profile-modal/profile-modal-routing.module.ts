import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfileModalPage } from './profile-modal.page';

const routes: Routes = [
  {
    path: '',
    component: ProfileModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfileModalPageRoutingModule {}
