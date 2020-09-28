import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompanyServicesComponent } from './company-services.component';


const routes: Routes = [
  {
    path: '', component: CompanyServicesComponent,
    children: [
      {
        path: 'business-consulting',
        loadChildren: () => import('./business-consulting/business-consulting.module')
          .then(m => m.BusinessConsultingModule),
        data: { preload: true, delay: true }
      },
      {
        path: 'product-engineering',
        loadChildren: () => import('./product-engineering/product-engineering.module')
          .then(m => m.ProductEngineeringModule),
        data: { preload: true, delay: true }
      },
      {
        path: 'mechatronics-embedded',
        loadChildren: () => import('./mech-embedded/mech-embedded.module')
          .then(m => m.MechEmbeddedModule),
        data: { preload: true, delay: true }
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompanyServicesRoutingModule { }
