import { NgModule } from '@angular/core';
import { authGuard } from './auth.guard';
import { RouterModule, Routes } from '@angular/router';
import { AddNewCarsComponent } from './add-new-cars/add-new-cars.component';
import { AdminAuthComponent } from './admin-auth/admin-auth.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminUpdateCarComponent } from './admin-update-car/admin-update-car.component';
import { CarDetailsComponent } from './car-details/car-details.component';
import { HomeComponent } from './home/home.component';
import { MybookingComponent } from './mybooking/mybooking.component';
import { UserAuthComponent } from './user-auth/user-auth.component';
import { AdminBookingComponent } from './admin-booking/admin-booking.component';

const routes: Routes = [

  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'user-auth',
    component: UserAuthComponent

  },

  {
    path: 'admin-auth',
    component: AdminAuthComponent
   
  },
  {
    path: 'admin-home',
    component: AdminHomeComponent,
     canActivate: [authGuard],
  },
  {
    path: 'add-newcars',
    component: AddNewCarsComponent,
    canActivate: [authGuard],
  },
  {
    path: 'admin-booking',
    component: AdminBookingComponent,
    canActivate: [authGuard],
  },
  {
    path: 'admin-update-car/:id',
    component: AdminUpdateCarComponent
  },
  {
    path: 'details/:id',
    component: CarDetailsComponent
  },
  {
    path: 'mybookings',
    component: MybookingComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
