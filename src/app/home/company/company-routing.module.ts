import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompanyComponent } from './company.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutUsComponent } from './about-us/about-us.component';


const routes: Routes = [
  {
    path: '', component: CompanyComponent,
    children: [
      { path: 'contact-us', component: ContactUsComponent},
      { path: 'about-us', component: AboutUsComponent},
      // {
      //   path: 'contact-us',
      //   loadChildren: () => import('./contact-us/contact-us.module')
      //   .then(m => m.ContactUsModule),
      //   data: { preload: true, delay: true }
      // }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompanyRoutingModule { }
