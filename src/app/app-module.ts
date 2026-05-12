import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Header } from './components/header/header';
import { Footer } from './components/footer/footer';
import { Hero } from './components/hero/hero';
import { Series } from './components/series/series';
import { NewMovies } from './components/new-movies/new-movies';
import { Contact } from './components/contact/contact';
import { Peliculas } from './pages/peliculas/peliculas';
import { Home } from './pages/home/home';

@NgModule({
  declarations: [App, Header, Footer, Hero, Series, NewMovies, Contact, Home],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    CommonModule,
    HttpClientModule,
    Peliculas,
  ],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
})
export class AppModule {}
