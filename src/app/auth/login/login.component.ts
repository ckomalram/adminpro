import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

import { UserService } from 'src/app/services/user.service';


declare const google: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, AfterViewInit {

  @ViewChild('googleBtn') googleBtn!: ElementRef;

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

  ngAfterViewInit(): void {
    this.googleInit();
  }

  googleInit(){
    google.accounts.id.initialize({
      client_id: "1031855842968-77bn5i4qlpvsoptmvc2njaivaoaedp30.apps.googleusercontent.com",
      callback: (response: any) =>  this.handleCredentialResponse(response)
    });
    google.accounts.id.renderButton(
      // document.getElementById("buttonDiv"),
      this.googleBtn.nativeElement,
      { theme: "outline", size: "large" }  // customization attributes
    );
  }

  handleCredentialResponse(response: any){
    console.log("Encoded JWT ID token: " + response.credential);

    this.userService.loginWithGoogle(response.credential).subscribe(resp => {
      console.log('login google', resp);
      this.router.navigateByUrl('/');

    })
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
      this.router.navigateByUrl('/');
    }, (err) => {
      console.warn(err);
      Swal.fire('Error al Logearse', err.error.msg, 'error');

    });

    // this.router.navigateByUrl('/');

  }

}
