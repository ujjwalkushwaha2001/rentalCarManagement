import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { car } from '../data-type'
import { CarsService } from '../services/car.service';
import { Router } from '@angular/router'
@Component({
  selector: 'app-add-new-cars',
  templateUrl: './add-new-cars.component.html',
  styleUrls: ['./add-new-cars.component.css']
})
export class AddNewCarsComponent implements OnInit {
  addProductMessage: string | undefined
  constructor( private route:Router ,private car: CarsService) { }

  ngOnInit(): void {
  }
  submit(data: car, form: NgForm) {
    this.car.addCar(data).subscribe((result) => {
      console.warn(result);
      if (result) {
        this.addProductMessage = "Car is succesfully added";
        this.route.navigate(['/admin-home'])
      }
      form.resetForm();
      setTimeout(() => this.addProductMessage = undefined, 2000);
    })
  }
}
