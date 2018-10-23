import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  public products: Product[] = [
    new Product(1, 'Product 001'),
    new Product(2, 'Product 002'),
    new Product(3, 'Product 003')
  ];

  product: Product = this.products[0];
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {

    this.route.params.subscribe(params => {
      this.products.forEach((p: Product) => {
        if (p.id == params.id) {
          this.product = p;
        }
      });
    });

  }

}
