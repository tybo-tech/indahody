import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Order } from './utils/email.model';
import { UxService } from './utils/ux.service';
import { filter, window } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'virgo';
  order: Order;
  toggle() { }
  constructor(private uxService: UxService, private router: Router) {
    this.uxService.orderObservable.subscribe(data => {
      if (data) {
        this.order = data;
      } else {
        this.order = {
          Products: [],
          Total: 0,
          Name: '',
          Email: '',
          Phone: '',
          Address: '',
          Shipping: ''
        };
      }
    })
  }
  checkout() {
    this.router.navigate(['checkout'])
  }
  ngOnInit() {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      if (document.querySelector('.main-container')) {
        document.querySelector('.main-container').scrollTop = 0;
      }
    });
  }
}
