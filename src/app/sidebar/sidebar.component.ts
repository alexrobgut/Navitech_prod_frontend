import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  showSection(sectionId: string) {
    // Oculta todas las secciones
    document.querySelectorAll('.container').forEach(container => {
      (container as HTMLElement).classList.add('hidden');
    });
    // Muestra la sección seleccionada
    const sectionToShow = document.getElementById(sectionId);
    if (sectionToShow) {
      sectionToShow.classList.remove('hidden');
    }
  }
}
