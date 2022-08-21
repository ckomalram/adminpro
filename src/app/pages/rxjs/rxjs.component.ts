import { Component, OnInit } from '@angular/core';
import { Observable, retry, interval, take, map, filter } from 'rxjs';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html'
})
export class RxjsComponent implements OnInit {

  constructor() {

    this.retornaIntervalo()
      .subscribe(valor => console.log(valor));



    //Observable #1
    // this.retornaObs()
    // .pipe(
    //   retry(1)
    // )
    // .subscribe(
    //   (valor) => console.log('sobs: ', valor),
    //   (error) => console.warn('Error ocurrido: ', error),
    //   () => console.info('Observable terminado!')
    // );
  }

  ngOnInit(): void {
  }

  retornaIntervalo(): Observable<number> {
    const intervalo$ = interval(500)
      .pipe(
        //take para tomar cierta cantidad
        take(10),
        //map para transformar valor que me retorna el observable
        map(value => value + 1),
        //filtrar impares solamente
        filter(valor => (valor % 2 === 0) ? true : false),

      );
    return intervalo$;
  }

  retornaObs(): Observable<number> {
    let i = -1;
    const obs$ = new Observable<number>(observer => {

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
      }, 1500);

    });

    return obs$;
  }



}
