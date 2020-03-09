import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PortalComponent} from './portal/portal.component';
import {ProfileComponent} from './profile/profile.component';
import {UserComponent} from './user.component';


const routes: Routes = [
  {
    path: '',
    component: UserComponent,
  },
      {
        path: 'userPortal',
        component: PortalComponent
      },
      {
        path: 'userProfile',
        component: ProfileComponent
      }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
