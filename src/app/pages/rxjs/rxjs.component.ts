import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html'
})
export class RxjsComponent implements OnInit {

  constructor() {
    const obs$ = new Observable(observer => {
      let i = -1;
     const intervalo = setInterval(() => {
        // console.log('tik tac...');
        i++;
        observer.next(i);
        if (i === 4) {
          clearInterval(intervalo);
          observer.complete();
        }

        //si esta en error no continua.
        if (i === 2) {
          observer.error('Simulando error en 2..');
        }
      },1500);

    });

    obs$.subscribe(
      (valor) => console.log('sobs: ', valor),
      (error) => console.warn('Error ocurrido: ', error),
      () => console.info('Observable terminado!')
      );
  }

  ngOnInit(): void {
  }



}
