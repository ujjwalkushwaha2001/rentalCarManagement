import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { UserAuthComponent } from './user-auth/user-auth.component';
import { AdminAuthComponent } from './admin-auth/admin-auth.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AddNewCarsComponent } from './add-new-cars/add-new-cars.component';
import { FormsModule } from '@angular/forms';
import { AdminUpdateCarComponent } from './admin-update-car/admin-update-car.component';
import { CarDetailsComponent } from './car-details/car-details.component';
import { MybookingComponent } from './mybooking/mybooking.component';
import { AdminBookingComponent } from './admin-booking/admin-booking.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    UserAuthComponent,
    AdminAuthComponent,
    AdminHomeComponent,
    AddNewCarsComponent,
    AdminUpdateCarComponent,
    CarDetailsComponent,
    MybookingComponent,
    AdminBookingComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
