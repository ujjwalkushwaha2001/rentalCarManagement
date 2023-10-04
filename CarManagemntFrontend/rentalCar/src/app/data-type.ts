export interface SignUp {
  name: string;
  email: string;
  password: string;
}
export interface login {

  email: string;
  password: string;
}
export interface car
{
  id: number,
  model: string,
  color: string,
  price: number,
  mileage: number,
  seating_capacity: number,
  fuel_Type: string,
  transmission_Type: string,
  location: string,
  images: string,
  description: string,
  availability: string
}
export interface booking {
  id ?: number,
  user_ID: number,
  car_ID: number,
  model:string
  images: string,
  totalDay: number,
  orderDate?: Date,
  name: string,
  returnRequest: number,
  totalPrice:number
}


