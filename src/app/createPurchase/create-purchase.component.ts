import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { OrdersService } from '../orders.service';
import { Order } from '../order.model';

@Component({
  selector: 'app-create-purchase',
  templateUrl: './create-purchase.component.html',
  styleUrls: ['./create-purchase.component.css']
})
export class CreatePurchaseComponent{
  @ViewChild('orderId') orderNumberRef: ElementRef;
  @ViewChild('vendor') vendorRef: ElementRef;
  @ViewChild('amount') amountRef: ElementRef;


  constructor(private ordersService: OrdersService) {};

  onCreateOrder(){
    const po = this.orderNumberRef.nativeElement.value;
    const ven = this.vendorRef.nativeElement.value;
    const amt = this.amountRef.nativeElement.value;
    const newPOrder = new Order(po, ven, amt, false, false, false);
    this.ordersService.addOrder(newPOrder);
  }

}
