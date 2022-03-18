import { Component, OnInit } from '@angular/core';

//Imports
import { Router } from '@angular/router';
import { FormGroup, FormBuilder} from '@angular/forms';
import { UserCrudService } from './../services/user-crud.service';

import {Global} from 'src/app/global'

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  userLogin: FormGroup;

  constructor(
    private router: Router,
    public formBuilder: FormBuilder,
    private userCrudService: UserCrudService
    ) {
      this.userLogin = this.formBuilder.group({
        email: [''],
        password: ['']
      });
    }

  ngOnInit() {
  }

  signIn() {
    if (!this.userLogin.valid) {
      return false;
    } else {
      console.log(Global.setEmail(this.userLogin.value.email))
      this.userCrudService.signinUser(this.userLogin.value).subscribe((response) => {
        console.log(response);
        localStorage.setItem('token', response.token);
        this.router.navigate(['/tabs']);
      },
      error => console.log(error));
    }
  }
}
