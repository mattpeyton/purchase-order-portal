import { Component, OnInit, Input } from '@angular/core';
import { OrdersService } from '../../../orders.service';
import { Order } from '../../../order.model';

@Component({
  selector: 'app-pending-delivery',
  templateUrl: './pending-delivery.component.html',
  styleUrls: ['./pending-delivery.component.css']
})
export class PendingDeliveryComponent implements OnInit {

  @Input() order: Order;
  constructor(private ordersService: OrdersService) { }

  ngOnInit() {

  }

}
