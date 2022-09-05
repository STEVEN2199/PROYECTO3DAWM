import { Component } from '@angular/core';
//import { RecursoService } from './servicios/recurso.service';

/*
import { Teams } from './interfaz/teams';
import { Players } from './interfaz/players';
import { Cities } from './interfaz/cities';
import { Country } from './interfaz/country';
*/

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //title = 'angularMAterial';

  /*DENTRO DEL CONSTRUCTOR PONGO FUNCIONES*/

  /*
  constructor(private recursoService: RecursoService) {



    recursoService.obtenerDatos().subscribe(respuesta => {
      let team = respuesta as Teams
      this.title = team.nombreEquipo;
    })

    recursoService.obtenerDatos().subscribe(respuesta => {
      let player = respuesta as Players
      this.title = player.nombreJugador;
    })

    recursoService.obtenerDatos().subscribe(respuesta => {
      let city = respuesta as Cities
      this.title = city.nombreCiudad;
    })

    recursoService.obtenerDatos().subscribe(respuesta => {
      let country = respuesta as Country
      this.title = country.nombrePais;
    })


  }
  */

}
