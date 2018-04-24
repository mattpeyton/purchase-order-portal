import { Component, OnInit } from '@angular/core';
import { OrdersService } from '../orders.service';
import { Order } from '../order.model';

@Component({
  selector: 'app-create-purchase',
  templateUrl: './create-purchase.component.html',
  styleUrls: ['./create-purchase.component.css']
})
export class CreatePurchaseComponent{

  constructor(private ordersService: OrdersService) {};

  onCreateOrder(order: Order){
  //  this.ordersService.addOrder(order);
    console.log("order created");
  }

}
