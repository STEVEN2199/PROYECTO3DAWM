import { Component, OnInit } from '@angular/core';

export interface metodos {
  nomMetodo: string;
  descripcion: string;
  url: string;
}

const ELEMENT_DATA: metodos[] = [
  {nomMetodo: "obtenerEquipo", descripcion:"Este método los nombres de los mejores equipos de europa",url:'http://localhost:3000/api/equipos/' },
  {nomMetodo: "obtenerJugador", descripcion:"Este método los nombres y demás atributos de los jugadores",url:'http://localhost:3000/api/equipos/' },
  {nomMetodo: "obtenerEquipoNosql", descripcion:"Este método los nombres de los mejores jugadores desde la bd no relacional",url:'http://localhost:3000/api/equipos/' },
  {nomMetodo: "obtenerImgJugadores", descripcion:"Este método obtiene las imágenes de los mejores jugadores a través de la bd no relacional",url:'http://localhost:3000/api/equipos/' },

];



@Component({
  selector: 'app-metodos',
  templateUrl: './metodos.component.html',
  styleUrls: ['./metodos.component.css']
})
export class MetodosComponent implements OnInit {
  displayedColumns: string[] = ['nomMetodo', 'descripcion', 'url'];
  dataSource = ELEMENT_DATA;
  constructor() { }

  ngOnInit(): void {
  }

}
