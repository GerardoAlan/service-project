import { Injectable } from '@angular/core';
import { UserModel } from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private user: UserModel;

  constructor() {
    this.user = {user:'default'};
  }

  setUser(user: string){
    this.user.user = user;
  }

  getUser(){
    return this.user.user;
  }

  cleanUser(){
    this.setUser('default');
  }

}
