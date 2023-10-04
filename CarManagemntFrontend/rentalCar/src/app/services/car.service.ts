import { Injectable } from '@angular/core';
import { car } from '../data-type'
import { Router } from '@angular/router'
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CarsService {

  constructor(private http: HttpClient) { }

  addCar(data: car) {
    return this.http.post('https://localhost:44337/api/cars', data);
  }
  carList() {
    return this.http.get<car[]>('https://localhost:44337/api/cars');
  }
  getCar(id: number) {
    return this.http.get<car>(`https://localhost:44337/api/cars/${id}`);
  }
  deleteCar(id: number) {
    return this.http.delete(`https://localhost:44337/api/cars/${id}`);
  }
  updateCar(data: car) {
    return this.http.put<car>(`https://localhost:44337/api/Cars/${data.id}`, data);
  }
  updateAvailability(id: number) {
    return this.http.put<car>(`https://localhost:44337/api/Cars/onlyid/${id}`, {});
  }
}
