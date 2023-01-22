import { ContentComponent } from './components/content/content.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FavoritosComponent } from './components/favoritos/favoritos.component';

const routes: Routes = [
  {
    path:"app-content",
    component: ContentComponent
  },
  {
    path:"app-favoritos",
    component: FavoritosComponent
  },
 
  {path: '', redirectTo: 'app-content', pathMatch: 'full'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
