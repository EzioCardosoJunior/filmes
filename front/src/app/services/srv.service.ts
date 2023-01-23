import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SrvService {

  baseUrl = "https://www.omdbapi.com/?i=tt3896198&apikey=3ff6c92f";
  favUrl = "http://localhost:3003/Favoritos"

  favorito = {
    "Title": "",
    "Year": "",
    "imdbID": "",
    "Type": "",
    "Poster": "",
    "Save": "",
  };


  constructor(private http: HttpClient) { }

  consultaFilmes(a: any) {
    !a ? a = 'Thor' : console.log(a)    
    return this.http.get(this.baseUrl + "&s=" + a);
  }

  adicionaFavoritos(title: any, imdb: any, year: any, poster: any, type: any, save: any) {
    this.favorito.Title = title;
    this.favorito.imdbID = imdb;
    this.favorito.Year = year;
    this.favorito.Poster = poster;
    this.favorito.Type = type;
    this.favorito.Save = "disabled"
    return this.http.post(this.favUrl, this.favorito);
  }

  consultaFavoritos() {   
    return this.http.get(this.favUrl);
  }
  
  deleteFavorito(id: any) {
    return this.http.delete(this.favUrl + '/' + id);
  }

 
}



