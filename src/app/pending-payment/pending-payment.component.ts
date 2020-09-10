import { Component, OnInit } from '@angular/core';
import { UsersService } from '../shared/users.service';
import { User } from '../models/user.model';

@Component({
  selector: 'app-pending-payment',
  templateUrl: './pending-payment.component.html',
  styleUrls: ['./pending-payment.component.scss'],
})
export class PendingPaymentComponent implements OnInit {
  allUser: User[];
  aprovedUsers: User[];
  userPay:User
  constructor(private userService: UsersService) {}


  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    this.userService.getAllUsers().subscribe((data: User[]) => {
      console.log('users', data);
      
      this.allUser = data;
      this.aprovedUsers = this.allUser.filter(
        (x) => x.creditStatus === 'aprobado' && x.creditPayment == 'no'
      );
    });
  }

  getUserById(id:number){
    this.userService.getUser(id).subscribe((data: User) => {
      this.userPay = data
      this.userPay.creditPayment ='si'
      this.paymentUser(id,this.userPay)
    });
  }

  paymentUser(id: number, user:User) {
    this.userService.payUser(id, user).subscribe((data: User) => {
      this.getUsers();
    });
  }
}
