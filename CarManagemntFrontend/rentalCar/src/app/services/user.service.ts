import { EventEmitter, Injectable } from '@angular/core';
import { SignUp, login } from '../data-type'
import { Router } from '@angular/router'
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  inValidUserAuth = new EventEmitter<Boolean>(false);
  constructor(private http: HttpClient, private route: Router) { }
  //userSignUp(user: SignUp) {
  //  return this.http.post('https://localhost:44337/api/users', user, { observe: 'response' })
  //    .subscribe((result) => {
  //      console.warn(result);
  //      if (result) {
  //        //localStorage.setItem('user', JSON.stringify(result.body));
  //        this.route.navigate(['/user-auth']);
  //        console.log(result);
  //      }
  //    })
  //}


  userSignUp(user: SignUp) {
    return this.http.post('https://localhost:44337/api/users', user);    
  }
  userLogin(data: login) {
    this.http.get<SignUp[]>(`https://localhost:44337/api/users?mail=${data.email}&password=${data.password}`,
      { observe: 'response' }
    ).subscribe((result) => {
      if (result && result.body?.length) {
        this.inValidUserAuth.emit(false);
        localStorage.setItem('user', JSON.stringify(result.body[0]));
        this.route.navigate(['/']);
      }
      else {
        this.inValidUserAuth.emit(true);

      }
    })
  }
  userAuthReload() {
    if (localStorage.getItem('user')) {
      this.route.navigate(['/']);
    }
  }
}
