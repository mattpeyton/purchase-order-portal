import { Component, OnInit } from '@angular/core';
import { Order } from '../../order.model';
import { OrdersService } from '../../orders.service';

@Component({
  selector: 'app-open-orders',
  templateUrl: './open-orders.component.html',
  styleUrls: ['./open-orders.component.css']
})
export class OpenOrdersComponent implements OnInit {
  orders: Order[];
  constructor(private ordersService: OrdersService) {}

  ngOnInit() {
    this.orders = this.ordersService.getOrders();
    this.ordersService.ordersChanged
      .subscribe(
        (orders: Order[]) => {
          this.orders = orders;
        }
      )

  }

}
