import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RecursoService {
  /*
  constructor() { }
  */
  constructor(private http: HttpClient) { }

  /*FUNCION PARA OBTENER DATOS*/

  obtenerEquipo() {
    return this.http.get('http://localhost:3000/api/equipos/')
    }

  obtenerJugador() {
      return this.http.get('http://localhost:3000/api/jugadores/')
      }
  obtenerEquipoNosql(){
    return this.http.get('https://nosql2-fcbfc-default-rtdb.firebaseio.com/collection.json')
  }

  obtenerImgJugadores(){
    return this.http.get('https://imgjugadores2-default-rtdb.firebaseio.com/collection.json')
  }
    /*
  obtenerDatos() {
    return this.http.get('https://dataserverdawm.herokuapp.com/album')
  }
  */

}
