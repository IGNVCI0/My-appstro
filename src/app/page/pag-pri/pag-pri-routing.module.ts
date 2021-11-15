import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PagPriPage } from './pag-pri.page';

const routes: Routes = [
  {
    path: '',
    component: PagPriPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagPriPageRoutingModule {}
