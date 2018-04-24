import { Injectable } from '@angular/core';
import { Order } from './order.model'

@Injectable()
export class OrdersService {
  orders =  [
    // {orderNumber:'M1804241',
    //  vendor: 'Plasticade',
    //  amount: 4000,
    //  materialReceived: false,
    //  invoiceReceived: false,
    //  invoicePaid: false
    // },
    // {orderNumber:'M1804242',
    //  vendor: 'Poco',
    //  amount: 5000,
    //  materialReceived: false,
    //  invoiceReceived: false,
    //  invoicePaid: false
    // },
    // {orderNumber:'M1804243',
    //  vendor: 'MGI',
    //  amount: 6000,
    //  materialReceived: false,
    //  invoiceReceived: false,
    //  invoicePaid: false
    // }

    // new Order('M1804241','Plasticade', 4000, false, false, false),
    // new Order('M1804242','PSS', 18000, false, false, false),
    // new Order('M1804243','MGI', 3000, false, false, false),
    // new Order('M1804244','Poco', 2000, false, false, false)
  ];

  constructor(){}
  addOrder(order: Order){
    this.orders.push(order);
  }

}
