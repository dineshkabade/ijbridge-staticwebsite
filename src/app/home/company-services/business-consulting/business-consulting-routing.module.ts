import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BusinessConsultingComponent } from './business-consulting.component';


const routes: Routes = [
  {
    path: '', component: BusinessConsultingComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BusinessConsultingRoutingModule { }
