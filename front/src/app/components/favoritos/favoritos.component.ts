import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { SrvService } from 'src/app/services/srv.service';
import { ContentType } from '../content/contentType';

@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.component.html',
  styleUrls: ['./favoritos.component.css']
})
export class FavoritosComponent {
 
  listaFilmesForms!: FormGroup;

  public content: ContentType = new ContentType()  
 
  constructor(private router: Router, private formBuilder: FormBuilder, private srvService: SrvService, private http: HttpClient) { }

  ngOnInit() {
    this.listaFilmesForms = new FormGroup({
      TitleFilm: new FormControl(null)
    })
    this.getFilmes()
  };

  getFilmes() {
    this.srvService.consultaFavoritos().subscribe((resultados: any) => {
      this.content.titulo = resultados;      
    })
  };

  removeFavoritos(id: any): void {
    this.srvService.deleteFavorito(id).subscribe((resp: any) => {
     
    })
    location.reload();
  };
  
  
 


}
