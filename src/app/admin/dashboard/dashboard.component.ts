import { Component, OnInit } from '@angular/core';
import {SharedService} from '../../Shared/shared.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private sharedService: SharedService) { }
  users;
  acceptedUser;
  ngOnInit() {
    this.getUsers();
  }
getUsers() {
    this.sharedService.getUsers().subscribe( (respondUsers: Array<any>) => {
    const usersdb = respondUsers;
    this.users = usersdb.filter(value => value.role === 'user' && !(!!value.permissionAccess));
    });
  }
  approve(user) {
    debugger
    user.permissionAccess = true;
    this.sharedService.updateAccessPermission(user.id, user).subscribe( res => {
      this.acceptedUser = res;
    });
  }
}
