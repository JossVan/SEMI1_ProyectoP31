import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import{ExplorarComponent} from './explorar/explorar.component';
import {FavoritosComponent} from './favoritos/favoritos.component';
import {PerfilComponent} from './perfil/perfil.component';
import {BibliotecaComponent} from './biblioteca/biblioteca.component';
import {VisorComponent} from './visor/visor.component';
import {ExtraerComponent} from './extraer/extraer.component';
import {CrearComponent} from './crear/crear.component';
const routes: Routes = [
  {
    path:'home',
    component:HomeComponent
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path:'explorar',
    component:ExplorarComponent
  },
  {
    path:'perfil',
    component:PerfilComponent
  },
  {
    path:'favoritos',
    component:FavoritosComponent
  },
  {
    path:'biblioteca',
    component:BibliotecaComponent
  },
  {
    path:'extraer',
    component:ExtraerComponent
  },
  {
    path:'visor',
    component:VisorComponent
  },
  {
    path:'crear',
    component:CrearComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
