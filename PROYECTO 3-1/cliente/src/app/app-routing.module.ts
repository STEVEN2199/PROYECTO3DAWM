import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AboutComponent } from './about/about.component';
import { ErrorComponent } from './error/error.component';
import { RouterModule, Routes } from '@angular/router';
import { JugadoresComponent } from './jugadores/jugadores.component';
import { EquipoComponent } from './equipo/equipo.component';
import { RegisterUserComponent } from './register-user/register-user.component';
import { MetodosComponent } from './metodos/metodos.component';

const routes: Routes= [
  {
    path: '',
    children: [
      {
        path: '',
        component: DashboardComponent
      },

      {
        path: 'about',
        component: AboutComponent
      },

      {
        path: 'jugadores',
        component: JugadoresComponent
      },

      {
        path: 'equipo',
        component: EquipoComponent
      },

      {
        path: 'login',
        component: RegisterUserComponent
      },
      {
        path: 'error',
        component: ErrorComponent
      },
      {
        path: 'filtro',
        component: AboutComponent
      },
      {
        path: 'metodos',
        component: MetodosComponent
      },

      {
        path: '404',
        component: ErrorComponent
      },

      {
        path: '**',
        redirectTo: '404',
      },

    ]
  }
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
