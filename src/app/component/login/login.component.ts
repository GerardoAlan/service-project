import { Component } from '@angular/core';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  user: string;

  constructor(
    private userService: UserService,
  ){
    this.user = '';
  }

  saveUser(){
    this.userService.setUser(this.user);
    alert('User: '+this.user+' saved successfully');
    this.user = '';
  }


}
