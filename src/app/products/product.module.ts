import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProductsListComponent} from './products-list.component';
import {ProductDetailComponent} from './product-detail.component';
import {ConvertToSpacesPipe} from '../shared/convert-to-spaces.pipe';
import {RouterModule} from '@angular/router';
import {ProductDetailGuard} from './product-detail.guard';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    ProductsListComponent,
    ProductDetailComponent,
    ConvertToSpacesPipe,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: 'products', component: ProductsListComponent},
      {path: 'products/:id', component: ProductDetailComponent, canActivate: [ProductDetailGuard]},
    ]),
    SharedModule
  ]
})
export class ProductModule { }
