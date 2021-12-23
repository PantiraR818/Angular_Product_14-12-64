import { Injectable } from '@angular/core';
import { Product } from './components/product/product';

//ฉีด อัด เรียกService สามารถโยนDataให้กับcomponent ต่างๆได้
@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }
//เสมือนGetter ให้ กำหนดData ตย.เป็น Array
  getProducts():Product[]{
    return [ //return ค่าดังกล่าวออกไป
      new Product(1,"Fried Chicken",100,0,"https://images.pexels.com/photos/6697264/pexels-photo-6697264.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"),  
      new Product(2,"Nugget",100,20,"https://images.pexels.com/photos/6941010/pexels-photo-6941010.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"),
      new Product(3,"Mashed Potato",100,20,"https://images.pexels.com/photos/10289298/pexels-photo-10289298.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"),
      new Product(4,"Egg Tart",100,20,"https://images.pexels.com/photos/5677314/pexels-photo-5677314.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"),
      new Product(5,"Chicken Burger",100,0,"https://images.pexels.com/photos/2657960/pexels-photo-2657960.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
    ];
  }
}
