import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  public formSubmitted = false;

  public registerForm = this.formbuilder.group({
    name: ['komalram 09102022', [Validators.required, Validators.minLength(3)]],
    email: ['komalram@gmail.com', [Validators.required, Validators.email]],
    password: ['12345', [Validators.required, Validators.minLength(5)]],
    password2: ['12345', [Validators.required, Validators.minLength(5)]],
    terms: [true, [Validators.required]]
  }, {
    validators: this.passwordIguales('password', 'password2')
  });

  constructor(private formbuilder: FormBuilder,
    private router: Router,
    private userService: UserService) { }

  createUser() {
    this.formSubmitted = true;
    // console.log(this.registerForm.value);
    // console.log(this.registerForm);
    // console.log(this.registerForm.valid);


    if (this.registerForm.invalid) {
      return;
    }
    //Crear usuario
    this.userService.createUser(this.registerForm.value).subscribe(resp => {
      console.log(resp);
      this.router.navigateByUrl('/');
    }, (err) => {
      console.warn(err);
      Swal.fire('Error al crear usuario', err.error.msg, 'error');

    });
  }

  campoNoValido(campo: string): boolean {

    if (this.registerForm.get(campo)?.invalid && this.formSubmitted) {
      return true
    } else {
      return false
    }
  }

  aceptaTerminos(): boolean {
    return !this.registerForm.get('terms')?.value && this.formSubmitted;
  }

  passwordNoNalido(): boolean {
    const pass1 = this.registerForm.get('password')?.value;
    const pass2 = this.registerForm.get('password2')?.value;

    if (pass1 !== pass2 && this.formSubmitted) {
      return true;
    } else {
      return false;
    }
  }

  passwordIguales(password1name: string, password2name: string) {

    return (formgroup: FormGroup) => {
      const pass1Control = formgroup.get(password1name);
      const pass2Control = formgroup.get(password2name);

      if (pass1Control?.value === pass2Control?.value) {
        pass2Control?.setErrors(null);
      } else {
        pass2Control?.setErrors({ passwordNoIguales: true });
      }
    }
  }

}
