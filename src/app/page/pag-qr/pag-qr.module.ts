import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PagQrPageRoutingModule } from './pag-qr-routing.module';

import { PagQrPage } from './pag-qr.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PagQrPageRoutingModule
  ],
  declarations: [PagQrPage]
})
export class PagQrPageModule {}
