import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: false,
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {

  // Definimos una interfaz simple o estructura inicial para el usuario
  user = this.getInitialUserData();

  //Procesa el envío del formulario. Recibe el objeto formulario de la vista para poder resetearlo correctamente.//
  enviarFormulario(formulario?: NgForm) {
    // Como ya tenemos validación en el HTML y el botón se deshabilita,
    // aquí podemos enfocarnos en la acción de envío.
    
    console.log('Datos enviados:', this.user);
    alert('¡Mensaje enviado correctamente! 🎉');

    // Reseteamos el modelo y el estado del formulario (errores visuales)
    this.resetForm(formulario);
  }

  //Retorna un objeto limpio para el usuario//
  private getInitialUserData() {
    return {
      nombre: '',
      email: '',
      asunto: '',
      mensaje: '',
    };
  }

  // Limpia los datos y el estado de validación de Angular
  private resetForm(formulario?: NgForm) {
    this.user = this.getInitialUserData();
    
    if (formulario) {
      formulario.resetForm(); // Esto limpia los estados .touched y .dirty de los inputs
    }
  }
}