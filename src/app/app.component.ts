import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule], // Importa CommonModule para funcionalidades básicas de Angular
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Gestión de Producción';

  showSection(sectionId: string) {
    const containers = document.querySelectorAll('.container');
    containers.forEach(container => {
      container.classList.add('hidden');
    });
    const section = document.getElementById(sectionId);
    if (section) {
      section.classList.remove('hidden');
    }
  }
}
