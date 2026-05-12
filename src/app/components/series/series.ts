import { Component } from '@angular/core';

@Component({
  selector: 'app-series',
  standalone: false,
  templateUrl: './series.html',
  styleUrl: './series.css',
})
export class Series {
  series = [
    {id:1 , name: 'Stranger Things', description: 'Un grupo de grandes amigos descubriran un mundo de aventuras y misterios en Hawkins, Indiana.', image: 'https://ingresso-a.akamaihd.net/b2b/production/uploads/article/image/4380/925876e677ce9c3ba4c58e4ca6b5eeb0.jpg' },
    {id:2 , name: 'The Good Doctor', description: 'Un joven cirujano con autismo y síndrome de savant luchara por convertirse en un excelente médico.', image: 'https://elcomercio.pe/resizer/v2/D3DFY4JUTVCPFFZTIZ3ICNEGAY.jpg?auth=c47594dc81e503b297461395324a7fef5a42575f38ab5597c7b15304c904eeab&width=1200&height=1200&quality=75&smart=true' },
    {id:3 , name: 'Breaking Bad', description: 'Un profesor de química se ve obligado a producir metanfetamina para asegurar el futuro de su familia.', image: 'https://media.revistagq.com/photos/5d25c072987c410008630d38/16:9/w_2560%2Cc_limit/breaking%2520bad.jpg' },
    {id:4 , name: 'Game of Thrones', description: 'Familias nobles compiten por el control de los Siete Reinos.', image: 'https://media.vandal.net/i/640x360/10-2023/19/2023101917155832_4.jpg' },
  ]

  verSerie(serie: any) {
    alert(`Mostrando detalles de ${serie.name}...`);
  }
}
