import { Component , OnInit} from '@angular/core';
import { IProduct } from './products';
import { ProductService } from './products.service';

@Component({
  selector: 'pm-products',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {
  pageTitle = 'Product List';
  products: any;
  imageWidth = 50;
  imageMargin = 2;
  showImage = false;
  listFilter = 'cart';
  constructor(private productService: ProductService) {
  }

  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  ngOnInit(): void {
    this.productService.getProducts().subscribe({
      next: products => this.products = products,
      error: err => console.log(err)
    });
  }
  onRatingClicked(message: string): void {
    this.pageTitle = 'Product List: ' + message;
  }
}
