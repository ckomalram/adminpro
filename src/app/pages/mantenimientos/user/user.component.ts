import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { User } from '../../../models/user.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
})
export class UserComponent implements OnInit {
  public totalUser: number = 0;
  public users: User[] = [];
  public desde: number = 0;

  constructor(private userServices: UserService) {}

  ngOnInit(): void {
    this.cargarUsuarios();
  }

  cargarUsuarios() {
    this.userServices.getUsers(this.desde).subscribe((resp) => {
      console.log(resp);
      this.totalUser = resp.totalUsers;


      if(resp.users.length !== 0){
        this.users = resp.users;
      }
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
}
