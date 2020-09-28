import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MechEmbeddedComponent } from './mech-embedded.component';
import { ControlUnitComponent } from './control-unit/control-unit.component';
import { ProductEngineeringComponent } from './product-engineering/product-engineering.component';
import { FunctionalSafetyComponent } from './functional-safety/functional-safety.component';


const routes: Routes = [{
  path: '', component: MechEmbeddedComponent,
  children:[
    { path: '', redirectTo: 'control-unit', pathMatch: 'full' },
    { path: 'control-unit', component: ControlUnitComponent},
    { path: 'product-engineering', component: ProductEngineeringComponent},
    { path: 'functional-safety', component: FunctionalSafetyComponent},

  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MechEmbeddedRoutingModule { }
