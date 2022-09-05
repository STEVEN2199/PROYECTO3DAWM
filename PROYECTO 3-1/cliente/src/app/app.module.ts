import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import {MaterialModule} from '@angular/material';
import 'hammerjs';
import { AppNavigationComponent } from './app-navigation/app-navigation.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { AppRoutingModule } from './app-routing.module';
import { AboutComponent } from './about/about.component';
import { ErrorComponent } from './error/error.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';

import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { JugadoresComponent } from './jugadores/jugadores.component';
import { EquipoComponent } from './equipo/equipo.component';

import {MatSelectModule} from '@angular/material/select';
import {MatTableModule} from '@angular/material/table';
import {MatDividerModule} from '@angular/material/divider';

/*Peticiones http*/
import { HttpClientModule } from '@angular/common/http';
import { RegisterUserComponent } from './register-user/register-user.component';
/*Peticiones http*/

/*Login*/
import {MatTabsModule} from '@angular/material/tabs';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { FormsModule } from '@angular/forms';
/*Login*/

import {MatPaginatorModule} from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MetodosComponent } from './metodos/metodos.component';


@NgModule({
  declarations: [
    AppComponent,
    AppNavigationComponent,
    AboutComponent,
    ErrorComponent,
    DashboardComponent,
    JugadoresComponent,
    EquipoComponent,
    RegisterUserComponent,
    MetodosComponent

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatSelectModule,
    MatTableModule,
    MatIconModule,
    MatDividerModule,


    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    //MaterialModule.forRoot()
    RouterModule,
    RouterTestingModule,
    AppRoutingModule,

    /* Peticiones http*/
    HttpClientModule,
    MatTabsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    FormsModule,
    MatPaginatorModule,
    MatSortModule
  ],
  //exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
