// los componentes necesitan decoradores
// que representan el tipo de rol de cada uno
import {
    Component,
    Input,
    Output,
    EventEmitter,
    OnChanges,
    SimpleChange,
    OnInit,
    DoCheck,
    OnDestroy
} from '@angular/core';
import { Product } from './../../../core/models/product.model';

// los decoradores se definen con un @ antes de la clase
@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit, DoCheck, OnDestroy {
    @Input() product: Product;
    @Output() productClicked: EventEmitter<any> = new EventEmitter();

    addCart() {
         console.log('añadir al carrito');
         this.productClicked.emit(this.product.id);
    }

    today = new Date();

    // ciclo de vida de los componentes

    // se utiliza para crear un componente y llevarlo a interfaz
    constructor() {
        console.log('1. constructor');
    }

    // este codigo se comenta porque ngOnChanges
    // tiene colicion con ngDoCheck
    // detecta cambios cada que hay un Input
    // ngOnChanges(changes: SimpleChanges) {
    //     console.log('2. ngOnChanges');
    //     console.log(changes);
    // }

    // se ejecuta solo una vez, cuando el componente ya esta en interfaz
    ngOnInit() {
        console.log('3. ngOnInit');
    }

    // detecta cambios en componentes padre e hijos
    ngDoCheck() {
        console.log('4. ngDoCheck');
    }

    // detecta cuando un componente es quitado desde la interfaz
    ngOnDestroy() {
        console.log('5. ngOnDestroy');
    }

    // product: Product = {
    //     id: '6',
    //     image: 'assets/images/html5.jpg',
    //     title: 'miel',
    //     price: 50,
    //     description: 'x'
    // };
}
