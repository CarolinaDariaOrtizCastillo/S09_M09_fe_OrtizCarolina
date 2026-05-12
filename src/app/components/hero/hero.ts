import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: false,
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero {

  title = 'Disfruta las mejores películas y series';
  subtitle = 'Contenido ilimitado, sin anuncios y en cualquier dispositivo.';

  explorar() {
    alert('Mostrando catálogo...');
  }

}
