import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoansComponent } from './loans/loans.component';
import { UsersComponent } from './users/users.component';
import { PendingPaymentComponent } from './pending-payment/pending-payment.component';


const routes: Routes = [
  {
    path:'',
    component: HomeComponent,
    pathMatch: "full"
  },
  {
    path:'prestamos', 
    component:LoansComponent
  },
  {
    path:'usuarios', 
    component:UsersComponent
  },
  {
    path:'pendientes', 
    component:PendingPaymentComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
