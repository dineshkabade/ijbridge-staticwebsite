import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductEngineeringComponent } from './product-engineering.component';


const routes: Routes = [{
  path: '', component: ProductEngineeringComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductEngineeringRoutingModule { }
