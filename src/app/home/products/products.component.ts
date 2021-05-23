import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { ORDER, PRODUCTS } from 'src/app/utils/constants';
import { Order, Product } from 'src/app/utils/email.model';
import { ProductService } from 'src/app/utils/product.service';
import { UxService } from 'src/app/utils/ux.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  encapsulation: ViewEncapsulation.None,
})

export class ProductsComponent implements OnInit {
  @Input() category: string;
  order: Order;
  products;
  showProduct: boolean;
  selectedProduct: Product;
  constructor(
    private uxService: UxService,
    private router: Router,
    private productService: ProductService
    ) {
    this.productService.productObservable.subscribe(data => {
      this.products = data || [];
    })
  }

  ngOnInit() {
    this.selectedProduct = this.products[0];
    if (this.category) {
      this.products = this.products.filter(x => x.Category.toLocaleLowerCase().includes(this.category.toLocaleLowerCase()));
    }
  }
  goto(e) { }

  addToCart(item: Product) {
    if (localStorage.getItem(ORDER) && localStorage.getItem(ORDER) !== 'undefined') {
      this.order = JSON.parse(localStorage.getItem(ORDER));
    } else {
      this.order = {
        Products: [],
        Total: 0,
        Name: '',
        Email: '',
        Phone: '',
        Address: '',
        Shipping: ''
      }
    }
    if (this.order && this.order.Products) {
      if (!this.order.Products.find(x => x.Name === item.Name)) {
        this.order.Products.push(item);
      }
      this.getTotal();
      if (document.querySelector('.main-container')) {
        document.querySelector('.main-container').scrollTop = 0;
      }
      this.router.navigate(['/checkout'])
    }

  }
  getTotal() {
    if (this.order && this.order.Products) {
      let tot = 0;

      this.order.Products.forEach(data => {
        tot += (Number(data.Price) * Number(data.Quantity));
      });
      this.order.Total = tot;
      this.uxService.updateOrderState(this.order);
    }

  }
  changeSlide(product: Product) {
    const temp = product.Icon;
    product.Icon = product.Icon2;
    product.Icon2 = temp;
  }
  view(product: Product) {
    this.showProduct = true;
    this.selectedProduct = product;
  }
}

