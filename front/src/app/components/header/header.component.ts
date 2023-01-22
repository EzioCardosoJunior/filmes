import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { SrvService } from 'src/app/services/srv.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  listaFilmesForms!: FormGroup;
  lista: any;
  TitleFilm: any;  

  constructor(private router: Router ,private formBuilder: FormBuilder, private srvService: SrvService, private http: HttpClient) { }

  ngOnInit() {
    this.listaFilmesForms = new FormGroup({
      TitleFilm: new FormControl(null)
    })
   
    }
    buscaTitulo(){
      console.log(this.lista)
      this.lista = this.listaFilmesForms.value.TitleFilm;
    }

    


}
