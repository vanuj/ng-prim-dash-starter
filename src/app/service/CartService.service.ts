import { Product } from './../model/Product.model';
import { Cart } from './../model/Cart.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class CartService {
  cart:Cart[] = [];
  cartCount:number = 0;
  constructor(private http: HttpClient){}
  
  addToCart(cartItem){
    debugger;   
    if(!this.cart){
        debugger;
    }
    this.cart.push(cartItem);
    localStorage.setItem('cartData', JSON.stringify(this.cart))
   }

   emptyCart(){
       this.cart = [];
   }

   getCartInfo(){
    return this.cart;
   }

   getCartcount(){
     return this.cart ? this.cart.length : 0 ;
   }

   registerCart(cartData){
     //generate cart id and store in local storage
     localStorage.getItem('cartData')? this.cart = JSON.parse(localStorage.getItem('cartData')) : localStorage.setItem('cartData', JSON.stringify(this.cart));

   }
  
}