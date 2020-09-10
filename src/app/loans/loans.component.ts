import { Component, OnInit, Output } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { UsersService } from '../shared/users.service';
import { User } from '../models/user.model';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-loans',
  templateUrl: './loans.component.html',
  styleUrls: ['./loans.component.scss'],
})
export class LoansComponent implements OnInit {
  capBase = environment.capitalBase;
  currentUser: FormGroup;
  status = ['aprobado', 'rechazado'];
  allUser: User[];
  submited: boolean = true;

  constructor(private userService: UsersService, public fb: FormBuilder) {}

  ngOnInit(): void {
    this.currentUser = this.fb.group({
      name: [''],
      email: [''],
      cc: [''],
      valueLoan: [''],
      DatePayment: [''],
    });
    this.getUsers();
    console.log('this.capBase', this.capBase);
  }

  getUsers() {
    this.userService.getAllUsers().subscribe((data: User[]) => {
      this.allUser = data;
    });
  }

  addUser(user) {
    this.userService.create(this.currentUser.value).subscribe((res) => {
      console.log('product Created');
    });
  }

  onSubmit() {
    if (this.capBase >= 10000) {
      var statusRamdom = this.status[
        Math.floor(Math.random() * this.status.length)
      ];
      var finder = this.allUser.find((x) => x.cc === this.currentUser.value.cc);

      if (finder === undefined) {
        this.currentUser.value.creditStatus = statusRamdom;
        this.currentUser.value.creditPayment = 'no';
        this.addUser(this.currentUser.value);
        this.capBase -= this.currentUser.value.valueLoan 
        console.log('this.capBase', this.capBase);
        
        if (statusRamdom == 'rechazado') {
          alert(`Tu crédito ha sido ${statusRamdom}`);
        } else {
          alert(`Tu crédito ha sido ${statusRamdom}`);
        }
      } else {
        if (finder.creditStatus == 'rechazado') {
          alert('No puedes solicitar tu crédito');
        } else if (this.currentUser.value.creditPayment = 'si') {
          this.currentUser.value.creditPayment = 'no';
          this.addUser(this.currentUser.value);
        }else{
          alert('Ya cuentas con un préstamo, cancela a tiempo para solicitar otro');
        }
      }
    } else {
      alert('Se agoto el capital del banco');
    }
  }
}
