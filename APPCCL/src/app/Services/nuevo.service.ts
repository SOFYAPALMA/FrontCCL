import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { RespuestaAPI } from '../Models/RespuestaAPI';
import { Nuevo } from '../Models/Nuevo';
import { appsettings } from '../../Settings/appsettings';

@Injectable({
  providedIn: 'root'
})
export class NuuevoService {

  private http = inject(HttpClient);
  private apiUrl: string = appsettings.apiUrl + "/Productos/CrearProducto";
  
  constructor() { }

  lista(){

    return this.http.get<RespuestaAPI>(this.apiUrl);
  }
  
  nuevoProducto(value: any) {
    throw new Error('Method not implemented.');
  }
  
  getProductos() {
    return this.http.get<Nuevo>(this.apiUrl);
  }
}
