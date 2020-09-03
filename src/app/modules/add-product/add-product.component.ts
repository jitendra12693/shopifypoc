import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  product = {vendor: 'jmdonlineshop', title: '', body_html: '',product_type:'',  id: 0,variants:[],image:null};
  variant = {option1:'First',price:0.0,sku:'',inventory_quantity:0,compare_at_price:0};
  variant1 = {option1:'Second',price:0.0,sku:'',inventory_quantity:0,compare_at_price:0};
  image={attachment:'',filename:''};

  variants= [{"option1": "First","price": "10.00",
      "sku": "123"
    },
    {
      "option1": "Second",
      "price": "20.00",
      "sku": "123"
    }
  ]

  constructor(private productService:ProductService) { }

  ngOnInit() {
  }

  SaveProduct(){
    this.product.variants=this.variants;
    this.variant1.price=this.variant.compare_at_price;
    this.product.variants.push(this.variant1);
    let productDetail={product:this.product}
    this.productService.saveProduct(productDetail).subscribe(resp=>{
      if(resp.product.id){
        let imageDet={image:this.image};
        this.productService.addProductImage(imageDet,resp.product.id).subscribe(img=>{
          debugger;
          alert('Record saved successfully.');
        })
      }
    })
  }

  showPreview(event) {
    const file = (event.target as HTMLInputElement).files[0];
    // File Preview
    const reader = new FileReader();
    reader.onload = () => {
      let fileString = reader.result as string;
      this.image.attachment = fileString.split(',')[1];
      this.image.filename = file.name;
    }
    reader.readAsDataURL(file)
  }
}
