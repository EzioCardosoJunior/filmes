import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { SrvService } from 'src/app/services/srv.service';

@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.component.html',
  styleUrls: ['./favoritos.component.css']
})
export class FavoritosComponent {

  titulo: any;
  listaFilmesForms!: FormGroup;
  lista: any;
  TitleFilm: any;

  constructor(private router: Router, private formBuilder: FormBuilder, private srvService: SrvService, private http: HttpClient) { }

  ngOnInit() {
    this.listaFilmesForms = new FormGroup({
      TitleFilm: new FormControl(null)
    })
    this.getFilmes()
  };

  getFilmes() {
    this.srvService.consultaFavoritos().subscribe((resultados: any) => {
      this.titulo = resultados;      
    })
  };

  removeFavoritos(id: any): void {
    this.srvService.deleteFavorito(id).subscribe((resp: any) => {
     
    })
    location.reload();
  };
  
  
 


}
