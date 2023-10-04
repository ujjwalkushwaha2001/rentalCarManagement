import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { booking } from '../data-type';
import { BookingsService } from '../services/bookings.service';
import { CarsService } from '../services/car.service';

@Component({
  selector: 'app-admin-booking',
  templateUrl: './admin-booking.component.html',
  styleUrls: ['./admin-booking.component.css']
})

export class AdminBookingComponent implements OnInit {
  bookingList: undefined | booking[]
  constructor(private route: Router, private Booking: BookingsService, private car: CarsService) { }
  ngOnInit(): void {
    this.refreshPage();
  }


  returnBooking(id: number,car_id:number) {
    console.log(id);
    console.log(car_id);
    this.car.updateAvailability(car_id).subscribe((result) => {
      if (result) {

      
      this.Booking.returnUpdate(id).subscribe((result) => {
        if (result) {
          this.refreshPage();
        }
      })
    }
    })

  }
  cancelBooking(id: number,car_id:number) {
    console.log("ujjwal");
    this.Booking.deleteBooking(id).subscribe((result) => {
      if (result) {
        this.car.updateAvailability(car_id).subscribe((result) => {
          if (result) {
            this.refreshPage();
          }
        })
      }
    })
  }

  refreshPage() {
    this.Booking.getAllBooking().subscribe((result) => {
      this.bookingList = result;
    })
  }
}
