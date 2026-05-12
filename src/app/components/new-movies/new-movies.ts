import { Component } from '@angular/core';

@Component({
  selector: 'app-new-movies',
  standalone: false,
  templateUrl: './new-movies.html',
  styleUrl: './new-movies.css',
})
export class NewMovies {
  movies = [
    {id:1 , name: 'Harry Potter y la Piedra Filosofal', description: 'Un niño huérfano descubre que es un mago y asiste a una escuela de magia.', image: 'https://m.media-amazon.com/images/M/MV5BNTU1MzgyMDMtMzBlZS00YzczLThmYWEtMjU3YmFlOWEyMjE1XkEyXkFqcGc@._V1_.jpg' },
    {id:2 , name: 'El Señor de los Anillos: La Comunidad del Anillo', description: 'Un hobbit emprende un viaje para destruir un anillo poderoso.', image: 'https://static.wikia.nocookie.net/eldragonverde/images/9/95/La_comunidad_del_Anillo.jpg/revision/latest?cb=20140116010444&path-prefix=es' },
    {id:3 , name: 'Matrix', description: 'Un hacker descubre que la realidad es una simulación controlada por máquinas.', image: 'https://static.wikia.nocookie.net/matrix/images/5/56/The_Matrix_digital_release_cover.jpg/revision/latest?cb=20210908111245' },
    {id:4 , name: 'Inception', description: 'Un ladrón especializado en robar secretos a través de los sueños es contratado para implantar una idea en la mente de un objetivo.', image: 'https://m.media-amazon.com/images/M/MV5BZjhkNjM0ZTMtNGM5MC00ZTQ3LTk3YmYtZTkzYzdiNWE0ZTA2XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg' },
  ]

  verPelicula(movie: any) {
    alert(`Mostrando detalles de ${movie.name}...`);
  }

  selectedMovieId: number | null = null;

  toggleDescripcion(movie: any) {
  if (this.selectedMovieId === movie.id) {
    this.selectedMovieId = null;
  } else {
    this.selectedMovieId = movie.id;
  }
}
}
