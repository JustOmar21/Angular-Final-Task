import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DisplayEmpComponent } from './components/display-emp/display-emp.component';
import { EmpFormComponent } from './components/emp-form/emp-form.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  {path:'' , redirectTo:'employee' , pathMatch:"full"},
  {path:'employee' , component : DisplayEmpComponent , pathMatch:"full"},
  {path:'employee/add' , component : EmpFormComponent , pathMatch:"full"},
  {path:'employee/edit/:id' , component : EmpFormComponent , pathMatch:"full"},
  {path:'login', component:LoginComponent , pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
