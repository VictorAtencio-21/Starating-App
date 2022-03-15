/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/naming-convention */
import { Injectable } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';
import { UserCrudService } from './user-crud.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

constructor(
  private userCrudService: UserCrudService,
) { }

intercept(req, next) {
  let tokenizeReq = req.clone({
    setHeaders: {
      Authorization: `Bearer ${this.userCrudService.getToken()}`
    }
  });
  return next.handle(tokenizeReq);
}

}
