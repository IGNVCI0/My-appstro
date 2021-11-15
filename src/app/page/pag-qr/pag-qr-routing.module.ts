import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PagQrPage } from './pag-qr.page';

const routes: Routes = [
  {
    path: '',
    component: PagQrPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagQrPageRoutingModule {}
