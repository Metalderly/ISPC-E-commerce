import { Component } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { PayPalScriptService, IPayPalConfig } from 'ngx-paypal';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  constructor(private cartService: CartService){
  }
  public payPalConfig?: IPayPalConfig;

  counter_cart: number|string = ''
  listProducts: Map<string, number[]> = new Map
  amountTotally = 1
  visibilityCart: boolean = false
  ngOnInit(){
    this.initConfig();
    this.cartService.listObservable.subscribe(data => {
      this.listProducts = data
    })
    this.cartService.quantityObservable.subscribe(el => {this.counter_cart=el})
    this.cartService.amountObservable.subscribe(data => {this.amountTotally=data})
  }

  toggleCart(){
    this.visibilityCart = !this.visibilityCart
  }

  private initConfig(): void {
    this.payPalConfig = {
      clientId: 'AVXJTUH6AwpbDuGd4ZUnF0hrm3sVae1g1eSKucOi29HXVEpYgkhwScZrH6teu6aEJBh9zj7BZDP2aMhl',
      currency: 'USD',
      createOrderOnClient : (data: any) => ({
        intent: 'CAPTURE',
        purchase_units: [
          {
            amount: {
              currency_code: 'USD',
              value: String(this.amountTotally),
            },
            items:[]
          },
        ],
      }),
      advanced: {
        commit: 'true',
      },
      style: {
        label: 'paypal',
        layout: 'vertical',
        color: 'blue',
        shape: 'rect',
      },
      onApprove: (data, actions) => {
        console.log('onApprove - transaction was approved, but not authorized', data, actions);
        actions.order.get().then((details: any) => {
        console.log('onApprove - you can get full order details inside onApprove: ', details);
        });
      },
      onClientAuthorization: (data) => {
        console.log('onClientAuthorization - you should probably inform your server about completed transaction at this point', data);
      },
      onCancel: (data, actions) => {
        console.log('OnCancel', data, actions);
      },
      onError: err => {
        console.log('OnError', err);
      },
      onClick: (data, actions) => {
        console.log('onClick', data, actions);
      },
    };
  }
}
