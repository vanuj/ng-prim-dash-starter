import { Product } from './../model/Product.model';
import { ProductService } from './../service/ProductService.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  productLists:Product[];

  constructor(public productService:ProductService) { }

  ngOnInit() { 
    this.productService.getProductLists().subscribe(res => {
      this.productLists = res;
    })
  }

  handleAddtoCart(product){
    console.log(product.name);
    debugger;
    this.productService.addToCart(product);
  }

  decrement(product){
    this.productService.removeFromCart(product);
  }

  increment(product){
    this.productService.addToCart(product);
  }

  // when user directly clicks on buy now for a particluar product
  addAndMoveToCart(pid){
    //add product to cart

    //load cart page
  }

}
