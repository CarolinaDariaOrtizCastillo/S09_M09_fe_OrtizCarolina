import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  OnLogin() {
    // Lógica de inicio de sesión aquí
    console.log('Iniciar sesión');
  }
}
