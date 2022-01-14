import { Directive, ElementRef, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[error-msg]'
})
export class ErrorMsgDirective implements OnInit, OnChanges {

  private _color: string = 'red';
  private _mensaje: string = 'Este campo es requerido';
  private _valido: boolean = false; 
  private htmlElement:ElementRef<HTMLElement>;

  //@Input() color: string = 'red';
  @Input() set color( valor: string ) {
    this._color = valor;
    this.setColor();
  }

  //@Input() mensaje: string = 'Este campo es necesario';
  @Input() set mensaje( valor: string ) {
    this._mensaje = valor;
    this.setMensaje();
  }

   //@Input() mensaje: string = 'Este campo es necesario';
   @Input() set valido( valor: boolean ) {
    //  if( valor ) {
    //   //this.htmlElement.nativeElement.remove();
    //   this.htmlElement.nativeElement.classList.add('hidden');
    //  } else {
    //   this.htmlElement.nativeElement.classList.remove('hidden');
    //  }
    this.htmlElement.nativeElement.hidden = valor;
   }
    

  constructor( private el: ElementRef<HTMLElement> ) {
    this.htmlElement = el;  
   }

  ngOnChanges(changes: SimpleChanges): void {
    // if (changes['mensaje']) {
    //   const mensaje = changes['mensaje'].currentValue;
    //   this.htmlElement.nativeElement.innerText = mensaje;
    // }

    // if (changes['color']) {
    //   const color = changes['color'].currentValue;
    //   this.htmlElement.nativeElement.style.color  = color;
    // }
  }

  ngOnInit(): void {
    /*
    console.log(this.color);
    console.log(this.mensaje);
    */
   
    this.setClase();
    this.setColor();
    this.setMensaje();
  }

  setClase(): void {
    this.htmlElement.nativeElement.classList.add("form-text");
  } 
   
  setColor(): void {
     this.htmlElement.nativeElement.style.color = this._color;
   }

  setMensaje(): void {
    this.htmlElement.nativeElement.innerText = this._mensaje;
  }


}
