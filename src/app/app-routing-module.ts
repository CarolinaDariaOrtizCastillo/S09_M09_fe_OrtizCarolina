import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Peliculas } from './pages/peliculas/peliculas';

const routes: Routes = [
  { path: '', component: Home },
  { path: 'peliculas', component: Peliculas }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
