import { Component, OnInit, Input } from '@angular/core';
import { ProductService } from '../product.service';
import { ProductComponent } from '../product/product.component';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  @Input() products: string[];

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.products = this.productService.getProducts();
  }

  addNewProduct(product: String) {
    this.productService.updateProduct(product);
  }
}
