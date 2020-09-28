import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DownloadsPageComponent } from './downloads-page.component';


const routes: Routes = [ {
  path: '', component: DownloadsPageComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DownloadsPageRoutingModule { }
