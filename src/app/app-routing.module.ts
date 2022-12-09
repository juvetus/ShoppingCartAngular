import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ChildpageComponent } from './childpage/childpage.component';
import { CountriesComponent } from './countries/countries/countries.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginpageComponent } from './loginpage/loginpage.component';

import { ProductsComponent } from './products/products/products.component';
import { ShoppingCartComponent } from './ShoppingCart/shopping-cart/shopping-cart.component';

const routes: Routes = [
  {path:'', redirectTo :"/products" , pathMatch:'full'},

  {path:"loginpage", component: LoginpageComponent},
  {path:"homepage", component:HomepageComponent},
  {path:"childpage", component:ChildpageComponent},
  {path:"countries", component:CountriesComponent},
  {path:"products", component:ProductsComponent},

  
  {path:"shoppingCart", component:ShoppingCartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
