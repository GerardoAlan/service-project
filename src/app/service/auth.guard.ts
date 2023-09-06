import { Injectable, inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
class AuthGuardService {

  constructor(private userService: UserService) { }
  
  canActivate(): boolean {
    if (this.userService.getUser() != 'default') {
      return true;
    }
    return false;
  }
}

export const AuthGuard: CanActivateFn = (): boolean => {
  return inject(AuthGuardService).canActivate();
}