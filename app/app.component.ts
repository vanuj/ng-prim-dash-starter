import { CartService } from './service/CartService.service';
import { Product } from './model/Product.model';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductService } from './service/ProductService.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Cart';
  cart: Observable<Product[]>;
  data = 0;
  cartQty

  constructor(private productService: ProductService, private cartService:CartService){}
  ngOnInit(){
    // this.cartService.registerCart(this.data);
    // this.productService.currentCartValue.subscribe(cartData => {
    //   debugger;
    //   this.data = this.cartService.getCartcount();
      //this.cart = this.productService.getProductLists();
      // this.cart = this
      // if(cartData.product){
      //   console.log("Cart loaded initially");
      //   this.data = this.cartService.addToCart(cartData.product);
      //   console.log(this.data);
      //   debugger;
      // }else{
      //   console.log("Cart loaded initially");
      // }
    // })
  }
}
