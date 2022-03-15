import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { UserCrudService } from './services/user-crud.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private userCrudService: UserCrudService,
    private router: Router
  ){ }

  canActivate(): boolean {
    if (this.userCrudService.loggedIn()){
      return true;
    }

    this.router.navigate(['/login']);
  }

}
