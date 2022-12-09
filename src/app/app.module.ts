import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { ChildpageComponent } from './childpage/childpage.component';
import { HomepageComponent } from './homepage/homepage.component';
import { CountriesComponent } from './countries/countries/countries.component';
import { ProductsComponent } from './products/products/products.component';

import { HttpClientModule } from '@angular/common/http';

import { ShoppingCartComponent } from './ShoppingCart/shopping-cart/shopping-cart.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginpageComponent,
    ChildpageComponent,
    HomepageComponent,
    CountriesComponent,
    ProductsComponent,
   
   
    ShoppingCartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
