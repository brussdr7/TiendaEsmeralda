import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  emailField: FormControl;

  constructor() {
    // se pueden agregar validaciones al form
    // como un minimo y un maximo de caracteres
    this.emailField = new FormControl('', [
      Validators.required,
      Validators.email
      // Validators.minLength(4),
      // Validators.maxLength(10)
    ]);
    // escuchar cambio dinamicamente
    // this.emailField.valueChanges
    // .subscribe(value => {
    //   console.log(value);
    // });
  }

  ngOnInit() {
  }

  sendMail() {
    if (this.emailField.valid) {
      console.log(this.emailField.value);
    }
  }

}
