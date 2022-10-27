import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { User } from '../../../models/user.model';
import { BusquedasService } from 'src/app/services/busquedas.service';
import Swal from 'sweetalert2';

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

  constructor(
    private userServices: UserService,
    private busquedaServices: BusquedasService
  ) {}

  ngOnInit(): void {
    this.cargarUsuarios();
  }

  cargarUsuarios() {
    this.loading = true;
    this.userServices
      .getUsers(this.desde)
      .subscribe(({ totalUsers, users }) => {
        // console.log(resp);
        this.totalUser = totalUsers;

        if (users.length !== 0) {
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

  buscar(termino: string) {
    if (termino.length === 0) {
      this.users = this.usersTmp;
      return;
    }

    this.busquedaServices.buscar('users', termino).subscribe((resultados) => {
      this.users = resultados;
      // console.log(resp);
    });
  }

  deleteUser(user: User) {
    Swal.fire({
      title: '¿Estás seguro?',
      text: `Proceder a borrar usuario ${user.name}`,
      icon: 'question',
      showCancelButton: true,
      // confirmButtonColor: '#3085d6',
      // cancelButtonColor: '#d33',
      confirmButtonText: 'Si, borrar!',
    }).then((result) => {
      if (result.isConfirmed) {
        this.userServices.eliminarUser(user).subscribe((resp: any) => {
          // console.log(resp);
          this.cargarUsuarios();
          Swal.fire('Borrado!', resp.msg, 'success');
        },error => {
          Swal.fire('Borrado fallido!', 'Error al eliminar el usuario', 'warning');
        });
      }
    });
  }
}
