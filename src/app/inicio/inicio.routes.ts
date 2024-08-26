import { Routes } from "@angular/router"
import { OperariosComponent } from "../operarios/operarios.component"




export const routes: Routes = [
    {
        path: '',
        component: OperariosComponent
    },
    {
        path: 'operarios',
        redirectTo: 'operarios',
        pathMatch: 'full'
    }
]