export class Order {
  public orderNumber: string;
  public vendor: string;
  public amount: number;
  public materialReceived: boolean;
  public invoiceReceived: boolean;
  public invoicePaid: boolean;

  constructor(orderNumber: string,
              vendor:string,
              amount: number,
              materialReceived: boolean,
              invoiceReceived: boolean,
              invoicePaid: boolean){
    this.orderNumber = orderNumber;
    this.vendor = vendor;
    this.amount = amount;
    this.materialReceived = materialReceived;
    this.invoiceReceived = invoiceReceived;
    this.invoicePaid = invoicePaid;
  }
}
