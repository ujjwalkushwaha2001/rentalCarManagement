import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { booking } from '../data-type'
@Injectable({
  providedIn: 'root'
})
export class BookingsService {

  constructor(private http: HttpClient) { }
  addBooking(data: booking) {
    return this.http.post('https://localhost:44337/api/order', data);
  }
  getBooking(id:number) {
    return this.http.get<booking[]>(`https://localhost:44337/api/order/${id}`);
  }
  returnBooking(id: number) {
    return this.http.put<booking>(`https://localhost:44337/api/order/${id}`, {});
  }
  returnUpdate(id: number) {
    return this.http.put<booking>(`https://localhost:44337/api/order/onlyid/${id}`, {});
  }
  getAllBooking() {
    return this.http.get<booking[]>('https://localhost:44337/api/order');
  }
  deleteBooking(id:number) {
    return this.http.delete<booking>(`https://localhost:44337/api/order/${id}`)
  }

}
