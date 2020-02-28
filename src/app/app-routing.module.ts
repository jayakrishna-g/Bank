import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { CustomersearchComponent } from './customersearch/customersearch.component';

const routes: Routes = [
  {path : 'customersearch' , component : CustomersearchComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
