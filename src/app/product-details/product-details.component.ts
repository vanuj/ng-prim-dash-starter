import { Component, OnInit } from '@angular/core';
import { ProductService } from '../service/ProductService.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  product:any;

  constructor(private productService:ProductService, private route: ActivatedRoute) { }

  ngOnInit() {
    //read from route params and load the product detail
    this.route.params.subscribe(params => {
      const pid = params['pid'];
      //loading product detail
      this.productService.getProductDetails(pid).subscribe(res => {
        debugger;
        this.product = res.find(item => item.pid == pid)
        })
    });
  }

}
