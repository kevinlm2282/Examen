import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateViajesComponent } from './components/create-viajes/create-viajes.component';
import { DestinosComponent } from './components/destinos/destinos.component';
import { HomeComponent } from './components/home/home.component';
import { ListViajesComponent } from './components/list-viajes/list-viajes.component';
import { ListComponent } from './components/list/list.component';
import { PaquetesComponent } from './components/paquetes/paquetes.component';

const routes: Routes = [
  {path: '', component: ListComponent},
  {path: 'list-viajes', component: ListViajesComponent},
  {path: 'createViajes', component: CreateViajesComponent},
  {path: 'editViaje/:id', component: CreateViajesComponent},
  {
    path: 'list', component: ListComponent
  },
  {
    path: 'destinos', component: DestinosComponent
  },
  {
    path: 'paquetes', component: PaquetesComponent
  },
  {
    path: 'home', component: HomeComponent
  }

  // {path: '**', redirectTo: 'list-viajes', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
