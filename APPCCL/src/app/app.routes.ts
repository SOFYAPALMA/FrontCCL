import { Routes } from '@angular/router';
import { InicioComponent } from './Pages/inicio/inicio.component';
import { ProductosComponent } from './Pages/productos/productos.component';

import { LoginComponent } from './Pages/login/login.component';
import { NuevoComponent } from './Pages/nuevo/nuevo.component';
import { AuthGuard } from './core/guard/auth.guard';

export const routes: Routes = [
  { path: '', canActivate: [AuthGuard], component: InicioComponent },
  { path: 'inicio', canActivate: [AuthGuard], component: InicioComponent },
  { path: 'nuevo', canActivate: [AuthGuard], component: NuevoComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'productos/:id',
    canActivate: [AuthGuard],
    component: ProductosComponent,
  },
];
