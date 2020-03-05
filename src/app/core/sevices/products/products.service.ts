import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Product } from './../../models/product.model';

import { environment } from './../../../../environments/environment';

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
    return this.http.get<Product[]>(`${environment.url_api}/products`);
  }

  // metodo para obtener un detalle de articulo en base al id
  getProduct(id: string) {
    return this.http.get<Product>(`${environment.url_api}/products/${id}`);
  }

  // Metodo para crear producto con el metodo post
  // este metodo contiene la url y el cuerpo en este caso product
  createProduct(product: Product) {
    return this.http.post(`${environment.url_api}/products`, product);
  }
}
