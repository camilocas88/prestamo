import { Component, OnInit } from '@angular/core';
import { UsersService } from '../shared/users.service';
import { User } from '../models/user.model';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  allUser: User[];
  constructor(private userService: UsersService) {}

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    this.userService.getAllUsers().subscribe((data: User[]) => {
      this.allUser = data;
    });
  }

  deleteUser(id: number) {
    console.log(id);
    this.userService.deleteUser(id).subscribe((data: User) => {
      this.getUsers();
    });
  }
}
