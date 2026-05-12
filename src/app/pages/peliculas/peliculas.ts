import { Component, OnInit } from '@angular/core';
import { PeliculaService } from '../../services/pelicula';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms'; // Importamos NgForm

@Component({
  selector: 'app-peliculas',
  standalone: true, // Asegúrate de esto si usas imports directos
  imports: [CommonModule, FormsModule],
  templateUrl: './peliculas.html',
  styleUrls: ['./peliculas.css']
})
export class Peliculas implements OnInit {

  peliculas: any[] = [];

  nueva = {
    id: 0,
    nombre: '',
    descripcion: '',
    imagen: ''
  };

  editando = false;

  constructor(private service: PeliculaService) {}

  ngOnInit() {
    this.listar();
  }

  listar() {
    this.service.getAll().subscribe((data: any) => {
      this.peliculas = data;
    });
  }

  // Ahora recibimos el formulario desde el HTML
  guardar(form: NgForm) {
    if (form.invalid) return; // Seguridad extra

    if (this.editando) {
      this.service.update(this.nueva.id, this.nueva).subscribe(() => {
        alert('Película actualizada con éxito 🎬');
        this.reset(form);
      });
    } else {
      this.service.create(this.nueva).subscribe(() => {
        alert('Película guardada con éxito 🍿');
        this.reset(form);
      });
    }
  }

  editar(p: any) {
    // Usamos spread operator para no modificar la lista original mientras editamos
    this.nueva = { ...p };
    this.editando = true;
    
    // Hacemos scroll hacia el formulario para mejorar la experiencia
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  eliminar(id: number) {
    if (confirm('¿Estás seguro de eliminar esta película?')) {
      this.service.delete(id).subscribe(() => {
        this.listar();
      });
    }
  }

  // Método para el botón cancelar del HTML
  cancelarEdicion(form: NgForm) {
    this.reset(form);
  }

  // Limpiamos el objeto Y el estado visual del formulario (touched, pristine)
  reset(form: NgForm) {
    this.editando = false;
    this.nueva = { id: 0, nombre: '', descripcion: '', imagen: '' };
    
    if (form) {
      form.resetForm(); // <--- Esto limpia los mensajes de error rojos
    }
    
    this.listar();
  }
}