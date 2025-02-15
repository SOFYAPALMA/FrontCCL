import { Routes } from '@angular/router';
import { InicioComponent } from './Pages/inicio/inicio.component';
import { ProductosComponent } from './Pages/productos/productos.component';
import { NuevoComponent } from './Pages/nuevo/nuevo.component';
import { LoginComponent } from './Pages/login/login.component';

export const routes: Routes = [
    {path:'',component:InicioComponent},
    {path:'inicio',component:InicioComponent},
    {path:'nuevo',component:NuevoComponent},
    {path:'login',component:LoginComponent},
    {path:'productos/:id',component:ProductosComponent},
    
];
