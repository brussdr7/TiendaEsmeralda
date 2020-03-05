import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Product } from './../../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  // inyeccion de dependencia
  constructor(
    private http: HttpClient
  ) { }

  // obtener todos los productos
  getAllProducts() {
    // este get resuelve un array de tipo Product[]
    return this.http.get<Product[]>('http://platzi-store.herokuapp.com/products');
  }

  // metodo para obtener un detalle de articulo en base al id
  getProduct(id: string) {
    return this.http.get(`http://platzi-store.herokuapp.com/products${id}`);
  }

}
