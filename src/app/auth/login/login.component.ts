import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public formSubmitted = false;

  public loginForm : FormGroup;

  constructor(private router: Router,
    private formbuilder: FormBuilder,
    private userService: UserService) {
    this.loginForm=this.formbuilder.group({
      email: [ localStorage.getItem('email') || '', [Validators.required, Validators.email]] ,
      password: ['', [Validators.required]] ,
      remember: [false]
    });
  }

  ngOnInit(): void {
  }

  login() {
    console.log(this.loginForm.value);

    if (this.loginForm.invalid) {
      return;
    }

    this.userService.login(this.loginForm.value).subscribe((resp) => {
      console.log(resp);
      if (this.loginForm.get('remember')?.value) {
        localStorage.setItem('email', this.loginForm.get('remember')?.value);
      }else{
        localStorage.removeItem('email');
      }

    }, (err) => {
      console.warn(err);
      Swal.fire('Error al Logearse', err.error.msg, 'error');

    });

    // this.router.navigateByUrl('/');

  }

}
