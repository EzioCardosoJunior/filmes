import { HttpClient } from '@angular/common/http';
import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { SrvService } from 'src/app/services/srv.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ContentType } from './contentType';



@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})


export class ContentComponent implements OnInit {
  listaFilmesForms!: FormGroup;

  public content: ContentType = new ContentType()  

  constructor(private _snackBar: MatSnackBar, private router: Router, private formBuilder: FormBuilder, private srvService: SrvService, private http: HttpClient) { }

  ngOnInit() {
    this.listaFilmesForms = new FormGroup({
      TitleFilm: new FormControl(null)
    })
    this.getFilmes(this.content.lista)
  };

  getFilmes(a: any) {
    this.srvService.consultaFavoritos().subscribe((result: any) => {
      this.content.tituloF = result;     
    });

    this.srvService.consultaFilmes(a).subscribe((resultados: any) => {
      this.content.titulo = resultados.Search;
      !this.content.titBanner ? this.content.titBanner = "Lançamentos" : this.content.titBanner = this.content.lista;
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
    this.content.lista = this.listaFilmesForms.value.TitleFilm;
    this.getFilmes(this.content.lista)
  };
};