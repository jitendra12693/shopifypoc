import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { API } from '../common/api';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService extends BaseService {
  //public API = 'http://localhost:64861/api';
  //public PRODUCT_API = `${this.API}/Product/`;
  //public PRODUCT_SAVEAPI = `${this.API}/Product/SaveProductDetails`;
  constructor(private http: HttpClient) { super() }
  updateProduct=new Subject<any>();
  updateCart=new Subject<any>();

  updateProductList(): Observable<any> {
    return this.updateProduct.asObservable();
  }

  updateCartCount(): Observable<any> {
    return this.updateCart.asObservable();
  }

  public addProductImage(image:any,params):Observable<any>{
    let result: Observable<any>;
    result = this.http.post<any>(`${API.URL.images}/`+params, image);
    return result;
  }

  public saveProduct(product: any): Observable<any> {
    let result: Observable<any>;
    if (product.id) {
      result = this.http.put<any>(`${API.URL.products}`, product);
    } else {
      result = this.http.post<any>(API.URL.products, product);
    }
    return result;
  }

  public shopifyProductList(){
    let promise = new Promise((resolve,reject)=>{
      let apiURL =`${API.URL.productList}`;
      this.http.get(apiURL)
      .toPromise()
      .then(
        res=>{
          resolve(res);
        })
        .catch(err=>{
          reject(err);
        });
    });
    return promise;
  }
}
