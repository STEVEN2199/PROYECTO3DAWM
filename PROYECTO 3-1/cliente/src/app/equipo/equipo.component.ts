import { Component, OnInit } from '@angular/core';

import { RecursoService } from '../servicios/recurso.service';
import { Teams } from '../interfaz/teams';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}



const ELEMENT_DATA: PeriodicElement[] = [
  {position: 9, name: 'Karim Benzema', weight: 35, symbol: 'CD'},
  {position: 10, name: 'Modric', weight: 35, symbol: 'MC'},
  {position: 3, name: 'Militao', weight: 35, symbol: 'DEC'},
  {position: 12, name: 'Zevallos', weight: 35, symbol: 'EXD'},
  {position: 11, name: 'Vinicius', weight: 35, symbol: 'EXI'},
  {position: 7, name: 'Hazard', weight: 35, symbol: 'SD'},
  {position: 14, name: 'Asencio', weight: 35, symbol: 'SD'},
  {position: 25, name: 'Rodrygo', weight: 35, symbol: 'EXI'},
  {position: 1, name: 'Courtois', weight: 35, symbol: 'PT'},
  {position: 5, name: 'Casemiro', weight: 35, symbol: 'MCD'},
  {position: 2, name: 'Alaba', weight: 35, symbol: 'LI'},
  {position: 4, name: 'Rudiger', weight: 35, symbol: 'DEC'},
  {position: 29, name: 'Carvajal', weight: 35, symbol: 'LD'},
  {position: 27, name: 'Mendy', weight: 35, symbol: 'DEC'},
  {position: 13, name: 'Valverde', weight: 35, symbol: 'MC'},
  {position: 8, name: 'Kross', weight: 35, symbol: 'MC'},
  {position: 36, name: 'Camavinga', weight: 35, symbol: 'MC'},
  {position: 26, name: 'Lucas Vasquez', weight: 35, symbol: 'EXD'},

];


@Component({
  selector: 'app-equipo',
  templateUrl: './equipo.component.html',
  styleUrls: ['./equipo.component.css']
})


export class EquipoComponent implements OnInit {
  jugadores: any = []
  prueba : any = []

  constructor(private recursoService: RecursoService) { }
  objectKeys: any;


  ngOnInit(): void {
    this.recursoService.obtenerEquipoNosql().subscribe(respuesta =>{

      this.jugadores = respuesta as any;
      this.prueba = respuesta ;
    })
  }

}



