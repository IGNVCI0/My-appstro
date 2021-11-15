import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PagPriPageRoutingModule } from './pag-pri-routing.module';

import { PagPriPage } from './pag-pri.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PagPriPageRoutingModule
  ],
  declarations: [PagPriPage]
})
export class PagPriPageModule {}
