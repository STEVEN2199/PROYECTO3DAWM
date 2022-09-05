import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Players } from '../interfaz/players';
import { RecursoService } from '../servicios/recurso.service';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  ELEMENT_DATA: Players[] = [];
  displayedColumns: string[] = ['id', 'author.firstName', 'author.lastName', 'numGoles','edad','salario'];
  dataSource = new MatTableDataSource<Players>(this.ELEMENT_DATA);

  @ViewChild(MatPaginator, { static: true })
  paginator!: MatPaginator;
  @ViewChild(MatSort, { static: true })
  sort!: MatSort;


  constructor(private recursoService: RecursoService) { }

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort= this.sort;
    this.recursoService.obtenerEquipoNosql().subscribe(respuesta =>{

      this.dataSource.data = respuesta as Players[];
    })
  }

}
