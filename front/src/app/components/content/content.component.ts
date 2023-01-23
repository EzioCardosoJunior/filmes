import { HttpClient } from '@angular/common/http';
import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { SrvService } from 'src/app/services/srv.service';
import { MatSnackBar } from '@angular/material/snack-bar';



@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})


export class ContentComponent implements OnInit {
  titulo: any;
  tituloF: any;
  listaFilmesForms!: FormGroup;
  lista: any;
  TitleFilm: any;
  titBanner: any;
  favClass: any;


  constructor(private _snackBar: MatSnackBar, private router: Router, private formBuilder: FormBuilder, private srvService: SrvService, private http: HttpClient) { }

  ngOnInit() {
    this.listaFilmesForms = new FormGroup({
      TitleFilm: new FormControl(null)
    })
    this.getFilmes(this.lista)
  };

  getFilmes(a: any) {
    this.srvService.consultaFavoritos().subscribe((result: any) => {
      this.tituloF = result;     
    });

    this.srvService.consultaFilmes(a).subscribe((resultados: any) => {
      this.titulo = resultados.Search;
      console.log(this.tituloF)
      !this.titBanner ? this.titBanner = "Lançamentos" : this.titBanner = this.lista;
    });
  };

  addFavoritos(nomeFilme: any, imdbFilme: any, year: any, poster: any, type: any, save: any): void {
    nomeFilme ?
      this.srvService.adicionaFavoritos(nomeFilme, imdbFilme, year, poster, type, save).subscribe((resp: any) => {
        this._snackBar.open('Favorito salvo com sucesso!', 'Fechar', { duration: 5000 });
      }) : this._snackBar.open('Favorito não pode ser salvo!', 'Fechar', { duration: 5000 });
      location.reload();
  };

  buscaTitulo() {
    console.log(this.lista)
    this.lista = this.listaFilmesForms.value.TitleFilm;
    this.getFilmes(this.lista)
  };
};