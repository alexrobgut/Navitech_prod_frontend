import { Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { ProduccionComponent } from './produccion/produccion.component';

export const routes: Routes = [
    {
        path: 'inicio',
        component: InicioComponent,
        children: [
            {
                path: 'operarios',
                loadChildren: () => import('../app/inicio/inicio.routes').then( m => m.routes )
            },
            {
                path: 'produccion',
                loadComponent: () => import('../app/produccion/produccion.component').then( modulo => modulo.ProduccionComponent )
            }
        ]
    },
    {
        path: '',
        redirectTo: 'inicio',
        pathMatch: 'full',
    }
];
