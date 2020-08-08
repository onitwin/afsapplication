import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component'; //import to allow routing to 'see' file
import {AuthComponent} from './auth/auth.component';//import to allow routing to 'see' file
import {CustomersComponent} from './home/customers/customers.component' //import to allow routing to 'see' file
import {EmployeesComponent} from './home/employees/employees.component' //import to allow routing to 'see' file
import {AuthGuard} from './auth/auth.guard'

const routes: Routes = [
  {path:'login',component:AuthComponent},
  {path:'home',component:HomeComponent, children:[
    {path:'customers',component:CustomersComponent,canActivate:[AuthGuard]},
    {path:'employees',component:EmployeesComponent,canActivate:[AuthGuard]}
  ]},
  {path:'', redirectTo :'/home',pathMatch:'full'},
  {path:'**',component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
