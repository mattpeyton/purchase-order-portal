import { Component, OnInit } from '@angular/core';
import { OrdersService } from './orders.service';
import { Order } from './order.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Peyton\'s Barricade Purchase Order Portal';

  constructor(ordersService: OrdersService){}


}
