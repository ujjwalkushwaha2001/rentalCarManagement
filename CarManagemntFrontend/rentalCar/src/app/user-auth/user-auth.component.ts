import { Component, OnInit } from '@angular/core';
import { login, SignUp } from '../data-type';
import { UserService } from '../services/user.service';
@Component({
  selector: 'app-user-auth',
  templateUrl: './user-auth.component.html',
  styleUrls: ['./user-auth.component.css']
})
export class UserAuthComponent implements OnInit {
  authError: string = '';
  showLogin: boolean = true;
  constructor(private user: UserService) { }


  ngOnInit(): void {
    this.user.userAuthReload();
  }
  signUp(data: SignUp) {

    this.user.userSignUp(data).subscribe((result) => {
      if (result) {
        console.warn(result);
        this.showLogin = true;
      }
    })

  }
  login(data: login) {
    this.user.userLogin(data);
    this.user.inValidUserAuth.subscribe((result) => {
      if (result) {
        this.authError = "Please enter valid user details..";
      }
    });
  }

  openLogin() {
    this.showLogin = true;
  }

  openSignUp() {
    this.showLogin = false;
  }
}
