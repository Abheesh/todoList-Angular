import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { TaskmanagerComponent } from './taskmanager/taskmanager.component';
import { AuthGuardService } from './auth-guard.service';
import { PerRegisterGuardService } from './per-register-guard.service';


const routes: Routes = [{
  path: '',
  component: TaskmanagerComponent,
  canActivate: [AuthGuardService] 
},{
  path:'login',
  component: LoginComponent,
  canActivate: [PerRegisterGuardService]
},{
  path: 'register',
  component: RegisterComponent,
  canActivate: [PerRegisterGuardService]
},
{ path: '**', redirectTo: '' }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
