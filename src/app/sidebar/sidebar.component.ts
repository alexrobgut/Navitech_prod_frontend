import { Component, Input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { SidebarProps } from './sidebar.types';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  @Input() routerLinkActive!: string | string[];

  public routes: SidebarProps[] = [
    {
      title: 'Inicio',
      route: '/inicio'
    },
    {
      title: 'Operarios',
      route: '/inicio/operarios'
    },
    {
      title: 'produccion',
      route: '/inicio/produccion'
    }
  ]
}
