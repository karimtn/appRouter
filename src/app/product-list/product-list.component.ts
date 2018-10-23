import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  public products: Product[] = [
    new Product(1, "Product 001"),
    new Product(2, "Product 002"),
    new Product(3, "Product 003")
  ];
  constructor() { }

  ngOnInit() {
  }

}
