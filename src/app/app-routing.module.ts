import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UsersV2Component } from './components/users-v2/users-v2.component';
import { UsersComponent } from './components/users/users.component';
import { RoutePaths } from './route-paths';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: `/${RoutePaths.V1}`
  },
  {
    path: RoutePaths.V1,
    component: UsersComponent
  },
  {
    path: RoutePaths.V2,
    component: UsersV2Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
