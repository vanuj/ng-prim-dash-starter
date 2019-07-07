import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  productList:any = {};
  constructor() { }

  ngOnInit() {
    this.productList = [
      {'title':'Category One', 'category':'books', 'imgSrc':'1.jpg',},
      {'title':'Category Two', 'category':'shoes', 'imgSrc':'2.jpg'},
      {'title':'Category Three', 'category':'other', 'imgSrc':'3.jpg'},
      {'title':'Category Four', 'category':'bus', 'imgSrc':'4.jpg'}
    ];
  }

}
