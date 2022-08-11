import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html'
})
export class IncrementadorComponent   {

 @Input() progreso: number = 10;
 @Input() btnclass: string = 'btn btn-primary';
 @Output() valorBarra: EventEmitter<number> = new EventEmitter();
//  @Input('Renombrado') progreso: number = 10;

  // get getPorcentaje(){
  //   return `${this.progreso}%`;
  // }

  cambiarValor(valor: number): any{
    if (this.progreso >= 100 && this.progreso >= 0) {
      this.valorBarra.emit(100);
      return this.progreso = 100;
    }
    if (this.progreso <= 0 && this.progreso < 0) {
      this.valorBarra.emit(0);
      return this.progreso = 0;
    }
    this.progreso += valor;
    this.valorBarra.emit(this.progreso);
  }

  onChange(event: number){
    // console.log(event);
    if (event >= 100) {
      this.progreso=100;
    }else if (event < 0){
      this.progreso=0;
    }else{
      this.progreso=event;
    }
    this.valorBarra.emit(this.progreso);
  }

}
