import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  title = 'TiendaEsmeralda';

  items = ['bruno', 'david', 'israel'];

  // definimos una variable para el pipe
  porwer = 10;

  // agregar item
  addItem() {
    this.items.push('nuevo item');
  }
  // borrar item
  deleteItem(index: number) {
    this.items.splice(index, 1);
  }

}
