import { Component, OnInit } from '@angular/core';
import { login } from '../data-type'
import { Router } from '@angular/router'
@Component({
  selector: 'app-admin-auth',
  templateUrl: './admin-auth.component.html',
  styleUrls: ['./admin-auth.component.css']
})
export class AdminAuthComponent implements OnInit {
  authError: string = '';
  constructor(private route: Router) { }

  ngOnInit(): void {
  }
  login(data: login) {
    if (data.email == "admin123@gmail.com" && data.password == "admin@2001") {
      localStorage.setItem('admin', JSON.stringify(data));
      this.route.navigate(['admin-home']);
    }
    else {
      this.authError = "Please enter valid credentials";
    }
  }

}
