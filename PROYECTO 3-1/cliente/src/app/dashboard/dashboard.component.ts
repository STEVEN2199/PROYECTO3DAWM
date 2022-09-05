import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { Teams } from '../interfaz/teams';
import { RecursoService } from '../servicios/recurso.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})


export class DashboardComponent implements OnInit {
  equipos: any = []

  constructor(private recursoService: RecursoService) { }
  objectKeys: any;


  ngOnInit(): void {
    this.recursoService.obtenerEquipo().subscribe(respuesta =>{

      this.equipos = respuesta as any;
      console.log(this.equipos)
    })
  }

}

/*
export class EquipoComponent implements OnInit {
  item : Teams = {
    id: -1,
    nombreEquipo: "",
    createdAt: ""
  };
  constructor(private recursoService: RecursoService) {
  }

  ngOnInit(): void {
    this.recursoService.obtenerEquipo().subscribe(respuesta => {
      this.item = respuesta as Teams
    })
  }

}
*/
