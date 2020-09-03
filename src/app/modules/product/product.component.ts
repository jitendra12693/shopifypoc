import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit,OnDestroy  {
  productList:any
  subscription: Subscription;
  product = {vendor: 'jmdonlineshop', title: '', body_html: '',product_type:'', published: false, id: 0};
  variants = {option1:'',price:0.0,sku:'',inventory_quantity:0,compare_at_price:0};
  image={attachment:'',filename:''};

  constructor(private productService:ProductService) { }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  ngOnInit() {
    this.subscription=this.productService.updateCartCount().subscribe(res=>{});
    this.BindProductList();
  }

  BindProductList(){
    this.productService.shopifyProductList().then((product: any) => {
      if (product) {
        this.productList = product.products;
      } else {
        console.log(
          `Product not returning the list`
        );
      }
    });
  }

}
