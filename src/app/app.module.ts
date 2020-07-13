import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http'; 

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav'; 
import {MatIconModule} from '@angular/material/icon'; 
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button'; 
import {MatInputModule} from '@angular/material/input'; 
import {MatDividerModule} from '@angular/material/divider'; 
import {MatCardModule} from '@angular/material/card'; 
import {MatStepperModule} from '@angular/material/stepper'; 
import {MatDatepickerModule} from '@angular/material/datepicker'; 
import { MatNativeDateModule } from '@angular/material/core'
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatChipsModule} from '@angular/material/chips'; 
import {MatSelectModule} from '@angular/material/select'; 
import {MatGridListModule} from '@angular/material/grid-list'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MapasComponent } from './mapas/mapas.component';
import { HomeComponent } from './home/home.component';
import { GenealogiasComponent } from './genealogias/genealogias.component';
import { EventosComponent } from './eventos/eventos.component';
import { CamposComponent } from './campos/campos.component';
import { SimulacoesComponent } from './simulacoes/simulacoes.component';
import { IndividuosComponent } from './individuos/individuos.component';
import { EstatisticasComponent } from './estatisticas/estatisticas.component';
import { SimNetlogoComponent } from './simulacoes/simNetlogo/simNetlogo.component';
import { MapComponent } from './map/map.component'


import { NgApexchartsModule } from 'ng-apexcharts';
import { FusionChartsModule } from 'angular-fusioncharts';
// Import FusionCharts library and chart modules
import * as FusionCharts from "fusioncharts";
import * as FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";
import * as charts from "fusioncharts/fusioncharts.powercharts";

// Pass the fusioncharts library and chart modules
FusionChartsModule.fcRoot(FusionCharts, charts, FusionTheme);
@NgModule({
  declarations: [
    AppComponent,
    MapasComponent,
    HomeComponent,
    GenealogiasComponent,
    EventosComponent,
    CamposComponent,
    SimulacoesComponent,
    IndividuosComponent,
    EstatisticasComponent,
    SimNetlogoComponent,
    MapComponent    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatButtonModule,
    MatInputModule,
    MatDividerModule,
    MatCardModule,
    MatStepperModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatAutocompleteModule,
    MatChipsModule,
    MatSelectModule,
    MatGridListModule,
    NgApexchartsModule,
    FusionChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
