import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabnavPage } from './tabnav.page';

//Importing AuthGuard
import { AuthGuard } from '../../auth.guard';

const routes: Routes = [
  {
    path: '',
    component: TabnavPage,
    children: [
      {
        path: 'dashboard',
        loadChildren: () => import('../dashboard/dashboard.module').then(m => m.DashboardPageModule),canActivate: [AuthGuard]
      },
      {
        path: 'search',
        loadChildren: () => import('../search/search.module').then(m => m.SearchPageModule),canActivate: [AuthGuard]
      },
      {
        path: 'profile/:id',
        loadChildren: () => import('../profile/profile.module').then(m => m.ProfilePageModule),canActivate: [AuthGuard]
      },
      {
        path: 'settings',
        loadChildren: () => import('../settings/settings.module').then(m => m.SettingsPageModule),canActivate: [AuthGuard]
      },
      {
        path: '',
        redirectTo: '/tabs/dashboard',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/dashboard',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabnavPageRoutingModule {}
