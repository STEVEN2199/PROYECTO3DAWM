import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Players } from '../interfaz/players';
import { RecursoService } from '../servicios/recurso.service';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css'],

})


export class ErrorComponent implements OnInit {
  ELEMENT_DATA: Players[] = [];
  displayedColumns: string[] = ['id', 'nombreJugador','numGoles','edad','salario','posicion' ];
  dataSource = new MatTableDataSource<Players>(this.ELEMENT_DATA);

  @ViewChild(MatPaginator, { static: true })
  paginator!: MatPaginator;
  @ViewChild(MatSort, { static: true })
  sort!: MatSort;

  constructor(private recursoService: RecursoService) { }
  objectKeys: any;

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort= this.sort;
    this.recursoService.obtenerJugador().subscribe(respuesta =>{

      this.dataSource.data = respuesta as Players[];
    })
  }

}

