import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { PortalComponent } from './portal/portal.component';
import { ProfileComponent } from './profile/profile.component';
import {UserComponent} from './user.component';


@NgModule({
  declarations: [PortalComponent, ProfileComponent, UserComponent],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
