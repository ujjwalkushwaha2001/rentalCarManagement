import { Component, OnInit } from '@angular/core';
import { CarsService } from '../services/car.service'
import {car} from '../data-type'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit
{
  popularCars: undefined | car[]
  constructor(private car: CarsService) { }
  ngOnInit(): void {
    this.car.carList().subscribe((result) => {
      this.popularCars = result;
     
    })
  }
  isNotAvailable(availability: string): boolean
  {
    return availability === 'Not Available';
  }
  
}
