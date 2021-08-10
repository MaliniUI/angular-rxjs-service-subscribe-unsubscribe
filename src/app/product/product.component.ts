import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Output() ProductName: String = 'Koltin';
  @Output() addProductEE = new EventEmitter();
  @Input() products;
  constructor() {}

  ngOnInit() {}

  onAddProd(form) {
    this.addProductEE.emit();
  }
}
