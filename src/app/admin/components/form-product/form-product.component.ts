import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { ProductsService } from './../../../core/sevices/products/products.service';

@Component({
  selector: 'app-form-product',
  templateUrl: './form-product.component.html',
  styleUrls: ['./form-product.component.scss']
})
export class FormProductComponent implements OnInit {

  form: FormGroup;

  constructor(
    // Inyeccion de dependencias
    private formBuilder: FormBuilder,
    private productsService: ProductsService,
    private router: Router
  ) {
    this.buildForm();
  }

  ngOnInit() {
  }

  // Este metodo se encarga de recibir toda la informacion
  // Se utiliza event para evitar que recargue la pagina
  // al enviar el formulario
  saveProduct(event: Event) {
    event.preventDefault();
    // se utiliza una condicional para continuar a crear producto
    if (this.form.valid) {
      // Se guarda el formulario en product
      const product = this.form.value;
      // Se crea el producto
      this.productsService.createProduct(product)
      .subscribe((newProduct) => {
        console.log(newProduct);
        // Redireccion desde nuestro controlador una vez creado
        this.router.navigate(['./admin/products']);
      });
    }
    console.log(this.form.value);
  }

  private buildForm() {
    this.form = this.formBuilder.group({
      id: ['', [Validators.required]],
      title: ['', [Validators.required]],
      price: ['', [Validators.required]],
      image: [''],
      description: ['', [Validators.required]]
    });
  }

}
