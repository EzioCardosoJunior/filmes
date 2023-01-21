import { HttpClient } from '@angular/common/http';
import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { SrvService } from 'src/app/services/srv.service';



@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})


export class ContentComponent implements OnChanges {
  @Input() dadosFilme: any;
  titulo: any;


  constructor(private srvService: SrvService, private http: HttpClient) { }
  ngOnChanges() {
    this.getFilmes(this.dadosFilme)
  }

  getFilmes(a: any) {
    this.srvService.consultaFilmes(a).subscribe((resultados: any) => {
      this.titulo = resultados.Search;
      console.log(this.titulo);
    })
  }

  addFavoritos(nomeFilme: any, imdbFilme: any, year: any, poster: any): void {
    this.srvService.adicionaFavoritos(nomeFilme, imdbFilme, year, poster).subscribe((resp: any) => {
    })
  };




};
