import { Component } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html'
})
export class IncrementadorComponent   {

  progreso: number = 14;

  get getPorcentaje(){
    return `${this.progreso}%`;
  }

  cambiarValor(valor: number): any{
    if (this.progreso >= 100 && this.progreso >= 0) {
      return this.progreso = 100;
    }
    if (this.progreso <= 0 && this.progreso < 0) {
      return this.progreso = 0;
    }
    this.progreso += valor;
  }

}
