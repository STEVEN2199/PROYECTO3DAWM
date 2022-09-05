import { Component, OnInit } from '@angular/core';

import { Players } from '../interfaz/players';
import { RecursoService } from '../servicios/recurso.service';


@Component({
  selector: 'app-jugadores',
  templateUrl: './jugadores.component.html',
  styleUrls: ['./jugadores.component.css']
})
export class JugadoresComponent implements OnInit {
  jugadoresDestacados: any = []
  imgJugadores: any = []

  /*
  constructor() { }

  ngOnInit(): void {
  }
  */

  item : Players = {
    id: -1,
    nombreJugador: "",
    numGoles: 0,
    edad: 0,
    salario: 0,
    posicion: "",
    createdAt: ""
  };
  constructor(private recursoService: RecursoService) {}
  objectKeys: any;

  ngOnInit(): void {
    this.recursoService.obtenerJugador().subscribe(respuesta => {
      //this.item = respuesta as Players
      this.jugadoresDestacados= respuesta as any;
      console.log(this.jugadoresDestacados);
    })

    this.recursoService.obtenerImgJugadores().subscribe(respuesta => {
      //this.item = respuesta as Players
      this.imgJugadores= respuesta as any;
      console.log(this.imgJugadores);
    })


  }
}
