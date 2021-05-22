import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ORDER, PRODUCTS, SKIN_TYPES } from 'src/app/utils/constants';
import { Order, Product } from 'src/app/utils/email.model';
import { UxService } from 'src/app/utils/ux.service';

@Component({
  selector: 'app-catergory',
  templateUrl: './catergory.component.html',
  styleUrls: ['./catergory.component.scss']
})
export class CatergoryComponent implements OnInit {
  skinTypes = SKIN_TYPES;
  products = PRODUCTS;
  id: any;
  item: any;
  order: Order;
  constructor(private activatedRoute: ActivatedRoute, private uxService: UxService, private router: Router) {
    this.activatedRoute.params.subscribe(r => {
      this.id = r.id;
    });
  }

  ngOnInit() {
    if (this.id) {
      this.item = this.skinTypes.find(x => x.Id === this.id)
    }

    if (this.id) {
      this.products = this.products.filter(x => x.Category.toLocaleLowerCase().includes(this.id.toLocaleLowerCase())
        || x.Category.toLocaleLowerCase().includes('all skin types'));
    }
    
  }

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

}
