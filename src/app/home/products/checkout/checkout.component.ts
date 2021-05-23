import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { COMPANY_EMIAL } from 'src/app/utils/constants';
import { Email, Order } from 'src/app/utils/email.model';
import { EmailService } from 'src/app/utils/email.service';
import { UxService } from 'src/app/utils/ux.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {


  // <app-add-customer [user]="user">
  name;
  surname;
  email;
  massage = '';
  phone;
  address;
  order: Order;
  productDescription
  showLoader;
  sent: boolean;
  merchantId = '15863973';
  merchantKey = 'xbamuwn3paoji';
  shopingSuccesfulUrl: string;
  companyId: any;
  paymentCancelledUrl: string;
  paymentCallbackUrl: string;
  constructor(
    private emailService: EmailService,
    private router: Router,
    private uxService: UxService,
  ) { }

  ngOnInit() {
    this.uxService.orderObservable.subscribe(data => {
      if (data) {
        this.order = data;
      } else {
        this.back();
      }
    })
    window.scroll(0, 0);
    this.shopingSuccesfulUrl = `${environment.BASE_URL}/checkout`;
    this.paymentCancelledUrl = `${environment.BASE_URL}/checkout`;
    this.paymentCallbackUrl = this.shopingSuccesfulUrl;
  }

    rem(item, index) {
      if (item && index > -1) {
        this.order.Products.splice(index, 1);
        this.getTotal();
      }
    }
    back() {
      this.router.navigate([``]);
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

    sendEmail() {
      this.productDescription = '';
      let order = `<h1>New order</h1>
    <h4>Total: R${this.order.Total}</h4>
    `;
      order += `
   
<table style='width: 100%; border: 1px solid rgb(139, 139, 139);border-collapse: collapse;'>
<th style='border: 1px solid rgb(139, 139, 139);text-align: left;'>
  Product
</th>
<th style='border: 1px solid rgb(139, 139, 139);text-align: left;'>
Quantity & Price 
</th>

<tr style="padding: 1em;">
    `;
      this.order.Products.forEach(product => {
        order += ` <tr style="padding: 1em; border: 1px solid rgb(139, 139, 139);">
      <td style="padding: 1em; border: 1px solid rgb(139, 139, 139);">`
        order += `${product.Name} (R${product.Price} each)  </td>`;

        order += ` <td style="padding: 1em; border: 1px solid rgb(139, 139, 139);">${product.Quantity} X R${Number(product.Quantity) * Number(product.Price)} </td>`

        order += `
      </tr>
      `;

      });
      order += `
    </table>
    `;
      const emailToSend: Email = {
        From: this.email,
        Email: COMPANY_EMIAL,
        Subject: this.name + ' Order',
        Message: `<br>${order} <br> <hr> ${this.massage}   <br> Name: ${this.name} <br> Email:  ${this.email} <br> Phone:  ${this.phone} <br> Address: ${this.address}`,
        UserFullName: 'Indabod Team'
      };
      this.showLoader = true;
      this.emailService.sendGeneralTextEmail(emailToSend)
        .subscribe(response => {
          if (response > 0) {
            this.sent = true;
            this.order.Products.forEach(x=>{
              this.productDescription += `${x.Name} | `;

            })
            // this.order.Products = [];
            // this.getTotal();
            //Thank you for contacting us we will reply as soon as possible
          }
        });
    }

  }
