import { Component } from '@angular/core';
import { car } from '../data-type'
import { CarsService } from '../services/car.service';
@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent {
  carList: undefined | any
  productMessage: string | undefined
  constructor(private car: CarsService) { }

  ngOnInit(): void {
    this.list();
  }

  deleteProduct(id: number) {
    console.warn("test id", id);
    this.car.deleteCar(id).subscribe((result) => {
      if (result) {
        this.productMessage = "Product is Deleted";
        this.list();
      }
    })
    setTimeout(() => {
      this.productMessage = undefined
    }, 2000);
  }
  list() {
    this.car.carList().subscribe((result) => {
      this.carList = result;
    })
  }
}
