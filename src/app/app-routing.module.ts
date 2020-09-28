import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { NgModule } from '@angular/core';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./home/home.module')
    .then(m => m.HomeModule) ,
    data: { preload: true, delay: true },
  }
]


@NgModule({
  imports: [RouterModule.forRoot(routes, 
    {
      scrollPositionRestoration: 'enabled', 
      anchorScrolling: 'enabled', 
      preloadingStrategy: PreloadAllModules
    })],
  exports: [RouterModule]
})
export class AppRoutingModule { }