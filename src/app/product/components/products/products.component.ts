import { Component, OnInit } from '@angular/core';
// se importa la interfaz Product
import { Product } from './../../../core/models/product.model';
import { ProductsService } from './../../../core/sevices/products/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  // array de productos
  // se tipa la array con la interfaz
  products: Product[] = [];

  // inyeccion de dependencias
  constructor(
    private productsService: ProductsService
  ) { }

  // peticion de la funcion fetchProducts
  ngOnInit() {
    this.fetchProducts();
  }

  clickProduct(id: number) {
    console.log('product');
    console.log(id);
  }

  // funcion para obtener los productos
  fetchProducts() {
    this.productsService.getAllProducts()
    .subscribe(products => {
      this.products = products;
    });
  }
}
