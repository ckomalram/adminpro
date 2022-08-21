import { Component, OnInit } from '@angular/core';
import { ActivationEnd, Router } from '@angular/router';
import { filter, map } from 'rxjs';

@Component({
  selector: 'app-bradcrumbs',
  templateUrl: './bradcrumbs.component.html'
})
export class BradcrumbsComponent implements OnInit {

  titulo: string = '';

  constructor(private router: Router) {
    this.getDataRuta();
   }

  ngOnInit(): void {
  }

  getDataRuta(){
    this.router.events
    .pipe(
      filter((event: any) => event instanceof ActivationEnd),
      filter((event: ActivationEnd) => event.snapshot.firstChild === null),
      map((event: ActivationEnd) => event.snapshot.data)

    )
    .subscribe((data: any) => {
      console.log(data);
      this.titulo= data.titulo;
      document.title = `AdminPro - ${this.titulo}`;
    });
  }

}
