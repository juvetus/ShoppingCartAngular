import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { count } from 'rxjs';
import { IProducts } from 'src/app/models/IProducts';

import { ProductsService } from 'src/app/service/products.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {
  @Input() name: any;
  // @Input() name: any;

  cartProducts: IProducts[] = []
  totalQuantity!: number;
  myprice!: number;
  totalPrice!: number;
  quanity!:number;
  total! : number
 
  products= [
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
  
  constructor(private productsService: ProductsService, private router: Router) {}
  ngOnInit(){
    this.productsService.event.subscribe(product =>{
      // this.cartProducts = product;
      let index = -1;
      index = this.cartProducts.findIndex(
        p => p.id === product.id
      )
      if(index === -1){
        this.cartProducts.push(product)
      }
      this.sum()

    })

    
   
  }
  validateInput(event :any, i:number){
   const quanity = +event.target.value
   if(quanity< 1){
    event.target.value = this.cartProducts[i].quanity
    // this.productsService.getProducts(this.cartProducts)
    return;
   }
   this.QtyUpdate(quanity, i)
  }

  private QtyUpdate(quanity:number, i: number){
    this.cartProducts[i].quanity = quanity
    // this.productsService.getProducts(this.cartProducts)
    this.getTotal(this.cartProducts)
  }

  
  deleteProduct(id:any) {
    let index = this.cartProducts.findIndex(item => item.id === id);
    this.cartProducts.splice(index, 1);
    this.sum();
  }
  sum(): void {
    this.totalQuantity = 0;
    this.myprice = 0;
    this.totalPrice = 0;
   
    if (this.cartProducts) {
      this.cartProducts.map(product => {
        this.totalQuantity += product.quanity;
        this.myprice += product.specifications.price;
        for (const ietm of this.cartProducts) {
          this.totalPrice += product.specifications.price * ietm.quanity  ;
        }
        this.totalPrice += product.specifications.price  ;
      });
     
    }
  }

  getTotal(data: any){
    let sub = 0
    for (const item of data) {
      sub += item.price * item.quanity
      this.total = sub
      
    }
  }
}
