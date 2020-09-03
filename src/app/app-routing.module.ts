import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductComponent } from './modules/product/product.component';
import { AddProductComponent } from './modules/add-product/add-product.component';
import { ProductListComponent } from './modules/product-list/product-list.component';


const routes: Routes = [
  {path:'product',component:ProductComponent},
  {path:'add-product',component:AddProductComponent},
  {path:'product-list',component:ProductListComponent},
  { path: '', redirectTo: '/product', pathMatch: 'full' },
  { path: '**', redirectTo: '/product', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
