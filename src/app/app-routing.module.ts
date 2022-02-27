import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VinosComponent } from './ventas/pages/vinos/vinos.component';
import { InicioComponent } from './ventas/pages/inicio/inicio.component';
import { VinoItemComponent } from './ventas/pages/vino-item/vino-item.component';
import { ErrorPageComponent } from './ventas/pages/error-page/error-page.component';
import { ContactoComponent } from './ventas/pages/contacto/contacto.component';
import { CrearVinoComponent } from './ventas/pages/crear-vino/crear-vino.component';
import { LoginComponent } from './ventas/pages/login/login.component';
import { RegisterComponent } from './ventas/pages/register/register.component';

const routes: Routes = [
  {
    path: '',
    component: InicioComponent,
    pathMatch: 'full',
  },
  {
    path: 'inicio',
    component: InicioComponent,
  },

  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'vinos',
    component: VinosComponent,
  },
  {
    path: 'crearvino',
    component: CrearVinoComponent,
  },
  {
    path: 'vinos/:id',
    component: VinoItemComponent,
  },
  {
    path: 'contacto',
    component: ContactoComponent,
  },
  {
    path: '404',
    component: ErrorPageComponent,
  },
  {
    path: '**',
    redirectTo: '404',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
