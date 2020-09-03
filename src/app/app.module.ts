import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ProductComponent } from './modules/product/product.component';
import { HttpClientModule } from '@angular/common/http';
import { AddProductComponent } from './modules/add-product/add-product.component';
import { AddProductImageComponent } from './modules/add-product-image/add-product-image.component';
import { ProductListComponent } from './modules/product-list/product-list.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    AddProductComponent,
    AddProductImageComponent,
    ProductListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
