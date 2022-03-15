import { Component, OnInit } from '@angular/core';

//Imports
import { Router } from '@angular/router';
import { FormGroup, FormBuilder} from '@angular/forms';
import { UserCrudService } from './../services/user-crud.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  userForm: FormGroup;

  constructor(
    private router: Router,
    public formBuilder: FormBuilder,
    private userCrudService: UserCrudService
    ) {
      this.userForm = this.formBuilder.group({
        name: [''],
        lastname: [''],
        username: [''],
        email: [''],
        password: ['']
      });
    }

  ngOnInit() {
  }

  signUp() {
    if (!this.userForm.valid) {
      return false;
    } else {
      this.userCrudService.signupUser(this.userForm.value).subscribe((response) => {
        console.log(response);
        localStorage.setItem('token', response.token);
        this.router.navigate(['/tabs']);
      },
      error => console.log(error));
    }
  }

}
