import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',

    loadChildren: () =>
      import('./pages/home/home.module').then((m) => m.HomeModule),
  },
  // {
  //   path: 'restaurants',
  //   loadChildren: () =>
  //     import(
  //       '../../projects/app2-restaurant/src/app/restaurant/restaurant.module'
  //     ).then((m) => m.RestaurantModule),
  // },
  // {
  //   path: 'order',
  //   loadChildren: () =>
  //     import('../../projects/app3-orders/src/app/order/order.module').then(
  //       (m) => m.OrderModule
  //     ),
  // },
  // {
  //   path: '',
  //   redirectTo: 'home',
  //   pathMatch: 'full',
  // },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules,
      scrollPositionRestoration: 'enabled',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
