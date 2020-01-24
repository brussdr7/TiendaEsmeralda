import { Component, OnInit } from '@angular/core';
// se importa la interfaz Product
import { Product } from '../product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  // array de productos
  // se tipa la array con la interfaz
  products: Product[] = [
    {
      id: '1',
      image: 'assets/images/bitcoin.jpg',
      title: 'arroz',
      price: 10,
      description: 'x'
    },
    {
      id: '2',
      image: 'assets/images/gorillaz.jpg',
      title: 'frijol',
      price: 5,
      description: 'x'
    },
    {
      id: '3',
      image: 'assets/images/responsive.jpg',
      title: 'maiz',
      price: 30,
      description: 'x'
    },
    {
      id: '4',
      image: 'assets/images/one-more-time.jpg',
      title: 'fresas',
      price: 40,
      description: 'x'
    },
    {
      id: '5',
      image: 'assets/images/rehuso.jpg',
      title: 'naranja',
      price: 10,
      description: 'x'
    },
    {
      id: '6',
      image: 'assets/images/html5.jpg',
      title: 'miel',
      price: 50,
      description: 'x'
    },
  ];

  constructor() { }

  ngOnInit() {
  }

  clickProduct(id: number) {
    console.log('product');
    console.log(id);
  }

}
