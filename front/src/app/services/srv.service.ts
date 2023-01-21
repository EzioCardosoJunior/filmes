import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SrvService {

  baseUrl = "https://www.omdbapi.com/?i=tt3896198&apikey=3ff6c92f";
  favUrl = "http://localhost:3003/Favoritos/"

  favorito = {
    "Title": "",
    "Year": "",
    "imdbID": "",
    "Type": "",
    "Poster": ""
  };


  constructor(private http: HttpClient) { }

  consultaFilmes(a: any) {
    !a ? a = 'Thor' : console.log(a)    
    return this.http.get(this.baseUrl + "&s=" + a);
  }

  adicionaFavoritos(title: any, imdb: any, year: any, poster: any) {
    this.favorito.Title = title;
    this.favorito.imdbID = imdb;
    this.favorito.Year = year;
    this.favorito.Poster = poster;


   // !a ? a = 'Thor' : console.log(a)
   console.log(this.favorito)
    return this.http.post(this.favUrl, this.favorito);
  }

  consultaFavoritos(a: any) {
    !a ? a = 'Thor' : console.log(a)
    return this.http.get(this.baseUrl + "&s=" + a);
  }

 
}






/* s	Yes		<empty>	Movie title to search for.
type	No	movie, series, episode	<empty>	Type of result to return.
y	No		<empty>	Year of release.
r	No	json, xml	json	The data type to return.
page New!	No	1-100	1	Page number to return.
callback	No		<empty>	JSONP callback name.
v	No		1	API version (reserved for future use). */
