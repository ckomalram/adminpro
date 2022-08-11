import { Component } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css']
})
export class ProgressComponent {
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
