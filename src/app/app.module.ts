import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CreatePurchaseComponent } from './createPurchase/create-purchase.component';
import { OpenOrdersComponent } from './purchaseorders/open-orders/open-orders.component';
import { PaidOrdersComponent } from './purchaseorders/paid-orders/paid-orders.component';
import { PurchaseOrdersComponent } from './purchaseorders/purchase-orders.component'


@NgModule({
  declarations: [
    AppComponent,
    CreatePurchaseComponent,
    OpenOrdersComponent,
    PaidOrdersComponent,
    PurchaseOrdersComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
