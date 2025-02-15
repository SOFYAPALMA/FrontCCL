import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { RespuestaAPI } from '../Models/RespuestaAPI';
import { Productos } from '../Models/Productos';
import { appsettings } from '../../Settings/appsettings';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  private http = inject(HttpClient);
  private apiUrl: string = appsettings.apiUrl + "/Productos/ConsultarProducto";
  
  constructor() { }

  lista(){

    return this.http.get<RespuestaAPI>(this.apiUrl);
  }

  getProductos() {
    return this.http.get<Productos>(this.apiUrl);
  }
}
