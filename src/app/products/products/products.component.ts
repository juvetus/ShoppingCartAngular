import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {  Router } from '@angular/router';
import { Observable } from 'rxjs';

import { ProductsService } from 'src/app/service/products.service';



@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  @Input() product!: any;
  @Input() name: any;

   @Output() productAdded = new EventEmitter();
   monTitre = 'Welcome to myShop'
  
  products= [
    {
      id: 1,
      name: "iPhone 12",
      quanity: 2,
      specifications: {
        color: "black",
        weight: "250g",
        storage: "256GB",
        price: 1000,
        
      },
      picture: "assets/iphone-12.png"
    },
    {
      id: 2,
      name: "Airpods",
      quanity: 4,
      specifications: {
        color: "white",
        weight: "50g",
        storage: "N/A",
        price: 200
      },
      picture: "assets/airpods.png"
    },
    {
      id: 3,
      name: "Samsung S22",
      quanity: 5,
      specifications: {
        color: "black",
        weight: "250g",
        storage: "512GB",
        price: 900
      },
      picture: "assets/Samsung_S22.png"
    },
    {
      id: 4,
      name: "Samsung Note10",
      quanity: 8,
      specifications: {
        color: "black",
        weight: "250g",
        storage: "256GB",
        price: 950
      },
      picture: "assets/Samsung_Note10.png"
    },
    {
      id: 5,
      name: "Phone 14",
      quanity: 4,
      specifications: {
        color: "white",
        weight: "250g",
        storage: "256GB",
        price: 1300
      },
      picture: "assets/IPhone_14.png"
    }
  ]
  cartProductList = [];

 constructor(private _productsService:ProductsService,  private router: Router){}
  // addProduct(product: any) {
  //   this.productAdded.emit(product);
  // }
ngOnInit() {
 const  products= [
    {
      id: 1,
      name: "iPhone 12",
      specifications: {
        color: "black",
        weight: "250g",
        storage: "256GB",
        price: "1000$"
      },
      picture: "assets/iphone-12.png"
    },
    {
      id: 2,
      name: "Airpods",
      specifications: {
        color: "white",
        weight: "50g",
        storage: "N/A",
        price: "200$"
      },
      picture: "assets/airpods.png"
    },
    {
      id: 3,
      name: "Samsung S22",
      specifications: {
        color: "black",
        weight: "250g",
        storage: "512GB",
        price: "900$"
      },
      picture: "assets/Samsung_S22.png"
    },
    {
      id: 4,
      name: "Samsung Note10",
      specifications: {
        color: "black",
        weight: "250g",
        storage: "256GB",
        price: "950$"
      },
      picture: "assets/Samsung_Note10.png"
    },
    {
      id: 5,
      name: "Phone 14",
      specifications: {
        color: "white",
        weight: "250g",
        storage: "256GB",
        price: "1300$"
      },
      picture: "assets/IPhone_14.png"
    }
  ]
  
}

  addProduct(value: any) {
    this.monTitre = value;
   this.productAdded.emit(value)
   console.log(value)
   this.cartProductList = value;
   console.log("cart",this.cartProductList)
   this._productsService.event.emit(value)
  //  this.cartProductList.push(value)
   
  // console.log("Current",this.currentItem)
  // this.router.navigateByUrl('shoppingCart')

}
onMouseEnter(name: any) {
  this.monTitre = name;
  
  

  // this.newTitleEvent.emit(name)
  console.log("mouse enter", name);
}
onMouseOut(name: string) {
  this.monTitre = name
}

}
