import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';

const routes: Routes = [{ path: '', component: HomeComponent,
children: [
  {
    path: '',
    loadChildren: () => import('./landing/landing.module')
    .then(m => m.LandingModule),
    data: { preload: true, delay: true }
  },
  {
    path: 'services',
    loadChildren: () => import('./company-services/company-services.module')
    .then(m => m.CompanyServicesModule),
    data: { preload: true, delay: true }
  },
  {
    path: 'company',
    loadChildren: () => import('./company/company.module')
    .then(m => m.CompanyModule),
    data: { preload: true, delay: true }
  },
  {
    path: 'downloads',
    loadChildren: () => import('./downloads-page/downloads-page.module')
    .then(m => m.DownloadsPageModule),
    data: { preload: true, delay: true }
  },
]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
