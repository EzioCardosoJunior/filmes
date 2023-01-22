import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SrvService } from 'src/app/services/srv.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
 

  constructor(private router: Router, private srvService: SrvService, private http: HttpClient) { }

 
  


}
