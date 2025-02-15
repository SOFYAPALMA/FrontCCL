import { Component, inject, OnInit } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { Productos } from '../../Models/Productos';
import { ProductosService } from '../../Services/productos.service';
import { Router } from '@angular/router';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [
    MatCardModule,
    MatTableModule,
    MatButtonModule,
    MatSortModule,
    RouterModule

  ],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent implements OnInit {
  
  private productosService = inject(ProductosService);
  public listaProductos: MatTableDataSource<Productos> = new MatTableDataSource<Productos>();
  public displayedColumns: string[] = [
    'id',
    'nombre',
    'cantidad',
  ];
   
  submitted = false;
  loading = false;
  error = '';
  hide = true;  
  
  constructor(private router: Router){}

  ngOnInit(): void {
    this.listadoProductos();

    console.log('S1', this.listaProductos);
  }

  listadoProductos() {
    
    this.productosService.lista().subscribe({
      next: (res) => {
        console.log('S1', this.listaProductos);
        console.log(res);
        if (res && res.data) {
          this.listaProductos.data = res.data; 
        }
      },
      error: (err) => {
        console.log(err.message);
      },
    });
  }

  Ir() {
    console.log("Ir");
    this.router.navigate(['/nuevo']);
  }

}
