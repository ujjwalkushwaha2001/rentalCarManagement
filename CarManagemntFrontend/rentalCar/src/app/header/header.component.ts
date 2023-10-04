import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  menuType: string = 'default';

  userName: string = '';
  adminName: string = '';
  constructor(private route: Router) { }

  ngOnInit(): void {
    this.route.events.subscribe((val: any) => {
      if (val.url) {
        if (localStorage.getItem('user')) {
          let userStore = localStorage.getItem('user');
          let userData = userStore && JSON.parse(userStore);
          this.userName = userData.name;
          this.menuType = 'user';
        }
        else if (localStorage.getItem('admin')) {
          this.adminName = 'Admin';
          this.menuType = 'admin';

        }
        else {
          this.menuType = 'default';
        }
      }
    });
  }
  logout() {
    localStorage.removeItem('admin');
    this.route.navigate(['/']);
  }
  userLogout() {
    localStorage.removeItem('user');
    console.log("user Logout");
    this.route.navigate(['user-auth']);
  }

}
