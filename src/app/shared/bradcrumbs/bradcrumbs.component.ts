import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivationEnd, Router } from '@angular/router';
import { filter, map, Subscription } from 'rxjs';

@Component({
  selector: 'app-bradcrumbs',
  templateUrl: './bradcrumbs.component.html'
})
export class BradcrumbsComponent implements OnInit, OnDestroy {

  titulo: string = '';
  tituloSub$: Subscription;

  constructor(private router: Router) {
    this.tituloSub$ = this.getDataRuta()
      .subscribe((data: any) => {
        console.log(data);
        this.titulo = data.titulo;
        document.title = `AdminPro - ${this.titulo}`;
      });
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.tituloSub$.unsubscribe();
  }
  getDataRuta() {
    return this.router.events
      .pipe(
        filter((event: any) => event instanceof ActivationEnd),
        filter((event: ActivationEnd) => event.snapshot.firstChild === null),
        map((event: ActivationEnd) => event.snapshot.data)
      );

  }

}
