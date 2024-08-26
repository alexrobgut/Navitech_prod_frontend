import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { InicioComponent } from './inicio/inicio.component';
import { RolesComponent } from './roles/roles.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { OperariosComponent } from './operarios/operarios.component';
import { ProduccionComponent } from './produccion/produccion.component';
import { MaquinariaComponent } from './maquinaria/maquinaria.component'; // Asegúrate de importar aquí

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    InicioComponent,
    RolesComponent,
    UsuariosComponent,
    OperariosComponent,
    ProduccionComponent,
    MaquinariaComponent  // Asegúrate de incluir aquí
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
