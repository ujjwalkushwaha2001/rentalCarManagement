import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {  booking } from '../data-type';
import { BookingsService } from '../services/bookings.service';
@Component({
  selector: 'app-mybooking',
  templateUrl: './mybooking.component.html',
  styleUrls: ['./mybooking.component.css']
})
export class MybookingComponent implements OnInit {
  bookingList: undefined | booking[]
  constructor(private route: Router, private Booking: BookingsService) { }
  ngOnInit(): void {
    this.refresh();
  }


  returnBooking(id: number) {
    console.log(id);
    this.Booking.returnBooking(id).subscribe((result) => {
      if (result) {
        this.refresh();
      }
    })
  }

  refresh() {
    let user = localStorage.getItem('user');
    let userId = user && JSON.parse(user).id;
    this.Booking.getBooking(userId).subscribe((result) => {
      this.bookingList = result;
      console.warn(this.bookingList[0].car_ID);
    })
  }
}
