import { RegistroComponent } from './pages/registro/registro.component';
import { LoginComponent } from './pages/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'   //le estamos diciendo que cualquier ruta que no encuentre la direccione a login mediante una ruta directa
  },
  {
    path: 'login',
    component: LoginComponent   //Y aquí le decimos que login se refiere al componente login
  },
  {
    path: 'registro',
    component: RegistroComponent   //Y aquí le decimos que registro se refiere al componente registro
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
