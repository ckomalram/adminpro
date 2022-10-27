import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { User } from '../../../models/user.model';
import { BusquedasService } from 'src/app/services/busquedas.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
})
export class UserComponent implements OnInit {
  public totalUser: number = 0;
  public users: User[] = [];
  public usersTmp: User[] = [];
  public desde: number = 0;
  public loading = false;

  constructor(private userServices: UserService , private busquedaServices: BusquedasService) {}

  ngOnInit(): void {
    this.cargarUsuarios();
  }

  cargarUsuarios() {
    this.loading = true;
    this.userServices.getUsers(this.desde).subscribe(({totalUsers, users}) => {
      // console.log(resp);
      this.totalUser = totalUsers;


      if(users.length !== 0){
        this.users = users;
        this.usersTmp = users;
      }

    this.loading = false;

    });
  }

  cambiarPagina(valor: number) {
    this.desde += valor;

    if (this.desde < 0) {
      this.desde = 0;
    } else if (this.desde > this.totalUser) {
      this.desde -= valor;
    }

    this.cargarUsuarios();
  }

  buscar(termino: string){

    if (termino.length === 0) {
      this.users = this.usersTmp;
        return;
    }


    this.busquedaServices.buscar('users', termino)
    .subscribe(resultados => {
      this.users = resultados
      // console.log(resp);
    });
  }
}
