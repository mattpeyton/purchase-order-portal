import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { OrdersService } from './orders.service'; 
import { AppComponent } from './app.component';
import { CreatePurchaseComponent } from './createPurchase/create-purchase.component';
import { OpenOrdersComponent } from './purchaseorders/open-orders/open-orders.component';
import { PaidOrdersComponent } from './purchaseorders/paid-orders/paid-orders.component';
import { PurchaseOrdersComponent } from './purchaseorders/purchase-orders.component';
import { PendingDeliveryComponent } from './purchaseorders/open-orders/pending-delivery/pending-delivery.component';
import { OrderReceivedComponent } from './purchaseorders/open-orders/order-received/order-received.component'


@NgModule({
  declarations: [
    AppComponent,
    CreatePurchaseComponent,
    OpenOrdersComponent,
    PaidOrdersComponent,
    PurchaseOrdersComponent,
    PendingDeliveryComponent,
    OrderReceivedComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [OrdersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
