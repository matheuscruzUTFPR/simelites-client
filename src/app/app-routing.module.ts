import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MapasComponent } from './mapas/mapas.component';
import { HomeComponent } from './home/home.component';
import { GenealogiasComponent } from './genealogias/genealogias.component';
import { EventosComponent } from './eventos/eventos.component';
import { CamposComponent } from './campos/campos.component';
import { IndividuosComponent } from './individuos/individuos.component';
import { SimulacoesComponent } from './simulacoes/simulacoes.component';
import { EstatisticasComponent } from './estatisticas/estatisticas.component';
import { MapComponent } from './map/map.component'


const routes: Routes = [
  { path: 'mapas', component: MapasComponent},
  { path: '', component: HomeComponent},
  { path: 'genealogias', component: GenealogiasComponent},
  { path: 'eventos', component: EventosComponent},
  { path: 'campos', component: CamposComponent},
  { path: 'individuos', component: IndividuosComponent},
  { path: 'simulacoes', component: SimulacoesComponent},
  { path: 'estatisticas', component: EstatisticasComponent},
  { path: 'map', component: MapComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
