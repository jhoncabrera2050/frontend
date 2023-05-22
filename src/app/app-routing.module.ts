import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './components/profile/profile.component';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';
import { TaskComponent } from './components/task/task.component';
import { FormsModule } from '@angular/forms';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }, // Ruta por defecto redirige a dashboard
  { path: 'profile', component: ProfileComponent, canActivate:[AuthGuard] }, // Ruta para el perfil
  { path: 'signin', component: SigninComponent }, // Ruta para el inicio de sesión
  { path: 'signup', component: SignupComponent }, // Ruta para el registro
  { path: 'task', component: TaskComponent, canActivate:[AuthGuard] }, // Ruta para las tareas
  { path: 'dashboard', component: DashboardComponent, canActivate:[AuthGuard] } // Ruta para el dashboard
];

@NgModule({
  imports: [RouterModule.forRoot(routes),FormsModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }

