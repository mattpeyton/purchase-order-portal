import { EventEmitter } from '@angular/core';
import { Order } from './order.model';



export class OrdersService {
  ordersChanged = new EventEmitter<Order[]>();
  private orders: Order[] =  [

    new Order('M1804241','Plasticade', 4000, false, false, false),
    new Order('M1804242','PSS', 18000, false, false, false),
    new Order('M1804243','MGI', 3000, false, false, false),
    new Order('M1804244','Poco', 2000, false, false, false)
  ];

  getOrders(){
    return this.orders.slice();
  }

  addOrder(order: Order){
    this.orders.push(order);
    this.ordersChanged.emit(this.orders.slice());

  }

}
