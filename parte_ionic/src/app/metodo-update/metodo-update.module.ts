import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MetodoUPDATEPageRoutingModule } from './metodo-update-routing.module';

import { MetodoUPDATEPage } from './metodo-update.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MetodoUPDATEPageRoutingModule
  ],
  declarations: [MetodoUPDATEPage]
})
export class MetodoUPDATEPageModule {}
