import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styles: [
  ]
})
export class AgregarComponent {

  textoMensaje: string = 'Texto mensaje';
  colorMensaje: string = 'red';

  miFormulario: FormGroup = this.fb.group({
    nombre: [ '', Validators.required ]
  })

  constructor( private fb: FormBuilder ) { }

  tieneError(campo: string ): boolean {

    return this.miFormulario.get(campo)?.invalid || false;

  }

  cambiarMensaje() {
    const texto = `#${crypto.getRandomValues(new Uint32Array(1))[0].toString(16).padStart(8, '0').slice(-6)}`
    this.textoMensaje = texto;
  }

  cambiarColor(): void {
    const color = `#${crypto.getRandomValues(new Uint32Array(1))[0].toString(16).padStart(8, '0').slice(-6)}`
    this.colorMensaje = color;

  }


}
