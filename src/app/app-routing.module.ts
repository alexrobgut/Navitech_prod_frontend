import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { RolesComponent } from './roles/roles.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { OperariosComponent } from './operarios/operarios.component';
import { ProduccionComponent } from './produccion/produccion.component';
import { MaquinariaComponent } from './maquinaria/maquinaria.component';

const routes: Routes = [
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
  { path: 'inicio', component: InicioComponent },
  { path: 'roles', component: RolesComponent },
  { path: 'usuarios', component: UsuariosComponent },
  { path: 'operarios', component: OperariosComponent },
  { path: 'produccion', component: ProduccionComponent },
  { path: 'maquinaria', component: MaquinariaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
