import { Routes } from '@angular/router';
import { EcommerceComponent } from './ecommerce/ecommerce.component';
import { ContactComponent } from './contact/contact.component';

export const routes: Routes = [
  {path: "", redirectTo: "contact", pathMatch: 'full'},
  {path: "ecommerce", component: EcommerceComponent},
  {path: "contact", component: ContactComponent},
];
