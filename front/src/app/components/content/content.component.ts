import { HttpClient } from '@angular/common/http';
import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { SrvService } from 'src/app/services/srv.service';



@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})


export class ContentComponent implements  OnInit {  
  titulo: any;
  listaFilmesForms!: FormGroup;
  lista: any;
  TitleFilm: any;
  titBanner: any;

  constructor(private router: Router, private formBuilder: FormBuilder, private srvService: SrvService, private http: HttpClient) { }

  ngOnInit() {   
    this.listaFilmesForms = new FormGroup({
      TitleFilm: new FormControl(null)
    })    
    this.getFilmes(this.lista) 
       
  };

  getFilmes(a: any) {    
    this.srvService.consultaFilmes(a).subscribe((resultados: any) => {
      this.titulo = resultados.Search;
      console.log('this.titulo',this.titulo);
      !this.titBanner ? this.titBanner="Lançamentos":this.titBanner = this.lista; 
    })
  };

  addFavoritos(nomeFilme: any, imdbFilme: any, year: any, poster: any): void {
    this.srvService.adicionaFavoritos(nomeFilme, imdbFilme, year, poster).subscribe((resp: any) => {
    })
  };

  buscaTitulo() {
    console.log(this.lista)   
    this.lista = this.listaFilmesForms.value.TitleFilm;
    this.getFilmes(this.lista)
  };
};