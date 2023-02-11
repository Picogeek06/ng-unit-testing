import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {

  users: any = [];

  constructor(private usersService: UsersService) { }

  ngOnInit(): void {
    this.getAllUsersData();
  }



  // using service to get all users data
  getAllUsersData() {
    this.usersService.getAllUsers().subscribe((res: any) => {
      this.users = res.data.users;
    });
  }

}
