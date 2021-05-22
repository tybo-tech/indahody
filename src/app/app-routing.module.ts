import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './home/about/about.component';
import { ContactComponent } from './home/contact/contact.component';
import { HomeComponent } from './home/home.component';
import { CatergoryComponent } from './home/products/catergory/catergory.component';
import { CheckoutComponent } from './home/products/checkout/checkout.component';
import { ProductsComponent } from './home/products/products.component';
import { ReturnsPolicyComponent } from './home/returns-policy/returns-policy.component';
import { TermsComponent } from './home/terms/terms.component';


const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'products', component: ProductsComponent},
  {path:'contact', component: ContactComponent},
  {path:'about', component: AboutComponent},
  {path:'checkout', component: CheckoutComponent},
  {path:'terms', component: TermsComponent},
  {path:'returns-policy', component: ReturnsPolicyComponent},
  {path:'category/:id', component: CatergoryComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
