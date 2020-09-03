import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit, OnDestroy {
  productList:any;
  subscription: Subscription;
  private router: Router;
  
  constructor(private productService:ProductService,private route: ActivatedRoute) { }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  ngOnInit() {
    this.subscription =this.route.params.subscribe(params => {});
    this.BindProductList();
  }

  ConfirmBox(productId){
    if(confirm('Are you sure to remove this product?')){
      if(true)
      this.productService.saveProduct(this.productList.filter(item=>item.ProductId===productId)[0])
      .subscribe(res=>{
        alert('You have removed one product Successfully');
        this.gotoList();
      });
    }
  }
  gotoList() {
    this.router.navigate(['/product-list']);
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
