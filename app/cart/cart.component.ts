import { Cart } from './../model/Cart.model';
import { CartService } from './../service/CartService.service';
import { ProductService } from './../service/ProductService.service';
import { Component, OnInit } from '@angular/core';
import { Product } from '../model/Product.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  product:any[] = [];
  cart:Cart[] = []; //Used in template to iterate over table
  productLen:any;
  another: Observable<Product[]>;

  constructor( private productService: ProductService, private cartService:CartService) { }

  ngOnInit() {
    debugger;
    this.cart = this.cartService.getCartInfo();
  }

  clearCart(){
    this.cartService.emptyCart();
    this.cart = [];
  }

}
