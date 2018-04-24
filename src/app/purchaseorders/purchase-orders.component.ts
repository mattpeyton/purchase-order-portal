import { Component, OnInit } from '@angular/core';
import {OrdersService} from '../orders.service';

@Component({
  selector: 'app-purchase-orders',
  templateUrl: './purchase-orders.component.html',
  styleUrls: ['./purchase-orders.component.css']
})
export class PurchaseOrdersComponent implements OnInit {

  constructor(private ordersService: OrdersService) {}

  ngOnInit() {
  }

}
