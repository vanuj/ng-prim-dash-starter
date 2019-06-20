import { Cartitem } from './../model/Cartitem.model';
import { CartService } from './CartService.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../model/Product.model';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class ProductService {
    productId;
    productListUrl = "https://my-json-server.typicode.com/vanuj/code/productList";
    loggedInUser = "https://my-json-server.typicode.com/vanuj/code/loginInfo";
    cartValue = new BehaviorSubject(new Cartitem());
    currentCartValue = this.cartValue.asObservable();

    constructor(private http: HttpClient, private cartService: CartService){}
    
    getProductLists(){
        return this.http.get<Product[]>(this.productListUrl);
    }

    getProductDetails(pid){
        return this.http.get<Product[]>(this.productListUrl);
    }

    addToCart(product){
        debugger;
        let cartItem = new Cartitem();
        cartItem.product = product;
        this.cartService.addToCart(cartItem);
        this.cartValue.next(cartItem);
    }
    removeFromCart(product){
        debugger;
        let cartItem = new Cartitem();
        cartItem.product = product;
        this.cartValue.next(cartItem);
        this.cartService.addToCart(cartItem);
    } 
}