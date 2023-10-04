import { Component, OnInit } from '@angular/core';
import { car, booking } from '../data-type';
import { ActivatedRoute, Router } from '@angular/router';
import { CarsService } from '../services/car.service';
import { BookingsService } from '../services/bookings.service';
@Component({
  selector: 'app-car-details',
  templateUrl: './car-details.component.html',
  styleUrls: ['./car-details.component.css']
})
export class CarDetailsComponent implements OnInit {
  productData: undefined | car
  totalDays: | number = 1
  availability: | boolean = true
  bookingConfirm: | boolean = false
  carData: car | undefined
  constructor(private route: ActivatedRoute, private router: Router, private car: CarsService, private bookings: BookingsService) { }
  ngOnInit(): void {
    this.refresh();
  }
  handleQuantity(val: string) {

    if (this.totalDays < 20 && val == 'plus') {
      this.totalDays += 1;
    }
    else if (this.totalDays > 1 && val == 'min') {
      this.totalDays -= 1;
    }
  }
  time = () => {
    this.bookingConfirm = false;
  }
  Booking(val: number) {

    if (!localStorage.getItem('user')) {
      this.router.navigate(['/user-auth']);
    }
    else {

      this.bookingConfirm = true;
      setTimeout(this.time, 1500);
      this.car.getCar(val).subscribe((data) => {
        this.carData = data;
        this.carData.availability = "Not Available";
        this.carData && this.car.updateCar(this.carData).subscribe((result) => {
          if (result) {
            console.log(this.totalDays);
            let user = localStorage.getItem('user');
            let userId = user && JSON.parse(user).id;
            let userName = user && JSON.parse(user).name;
            console.log(userName);
            const today = new Date();
            const bookingDate = today;
          
        
            let bookingData: booking = {
              user_ID: userId,
              car_ID: val,
              model: this.carData?.model || "defualt",
              images: this.carData?.images || "default",
              totalDay: this.totalDays,
              orderDate: bookingDate,
              name: userName,
              returnRequest: 0,
              totalPrice: (this.totalDays * (this.carData?.price ?? 0))
            }
            this.bookings.addBooking(bookingData).subscribe((result) => {
              if (result) {
              }
            })
            this.refresh();
          }
        });
      })
      
    }
  }
  refresh() {
    let productId = this.route.snapshot.paramMap.get('id');
    console.warn(productId);
    productId && this.car.getCar(parseInt(productId)).subscribe((data) => {
      this.productData = data;
      if (this.productData.availability == "Not Available") {
        this.availability = false;
      }
    })
  }

}
