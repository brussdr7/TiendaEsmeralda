// las directivas estan para modificar el DOM dinamicamente
// hay que tener cuidado de donde se utiliza ya que no es
// tan buena practica manipular el DOM dinamicamente

import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(
    element: ElementRef
  ) {
    element.nativeElement.style.backgroundColor = 'red';
  }

}
