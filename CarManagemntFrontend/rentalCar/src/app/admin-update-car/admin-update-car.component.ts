import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CarsService } from '../services/car.service'
import { car } from '../data-type';
@Component({
  selector: 'app-admin-update-car',
  templateUrl: './admin-update-car.component.html',
  styleUrls: ['./admin-update-car.component.css']
})
export class AdminUpdateCarComponent {

  carData: car | undefined
  updateMessage: undefined |string
  constructor(private car: CarsService, private router: Router, private route: ActivatedRoute) { }


  ngOnInit(): void {
    let productId = this.route.snapshot.paramMap.get('id');
    console.warn(productId);
    productId && this.car.getCar(parseInt(productId)).subscribe((data) => {
   
      this.carData = data;
    })
  }

  submit(data: car) {
    if (this.carData) {

      data.id = this.carData.id;
    }
    this.car.updateCar(data).subscribe((result) => {
      if (result) {
        console.warn(result);
        this.updateMessage = 'Product has Updated...';
      
      }
    });
    setTimeout(() => {
      this.updateMessage = undefined;
      this.router.navigate(['/admin-home']);
    }, 1000);  }
}
