import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products: any = ['Android', 'Apple', 'Windows'];

  getProducts() {
    return [...this.products]; // this will just return a copy of the products array and not the pointers
  }

  updateProduct(productName: String) {
    this.products.push(productName);
  }

  deleteProduct(productName: String) {
    this.products = this.products.filter(p => p !== productName);
  }
}
