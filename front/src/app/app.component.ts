import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { SrvService } from 'src/app/services/srv.service';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent implements OnInit {
    
 
  constructor(private srvService: SrvService, private http: HttpClient) { }
  ngOnInit() {
   
  }

  }

