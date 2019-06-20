import { ProductService } from './../service/ProductService.service';
import { CartService } from './../service/CartService.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.scss']
})
export class MainHeaderComponent implements OnInit {
  cartCount:number = 0;

  constructor(private productService: ProductService, private cartService:CartService) { }

  ngOnInit() {
    debugger;
    this.cartService.registerCart(this.cartCount);
    this.productService.currentCartValue.subscribe(cartData => {
      this.cartCount = this.cartService.getCartcount();
    });
  }

}
