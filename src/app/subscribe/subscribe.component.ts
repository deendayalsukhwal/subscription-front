import { Component, OnInit, Input } from '@angular/core';
import { BuyProductComponent } from '../buy-product/buy-product.component';

declare var Razorpay: any;

@Component({
  selector: 'app-subscribe',
  templateUrl: './subscribe.component.html',
  styleUrls: ['./subscribe.component.css']
})
export class SubscribeComponent implements OnInit {

  constructor() {}

  payNow(value) {
      var options = {
          "key": "rzp_test_QhppnMyMEomYDT", // Replace with your API key
          "amount": value * 100, // Amount in paise (e.g., 50000 paise = INR 500)
          "currency": "INR",
          "name": "Test Merchant",
          "description": "Test Transaction",
          "image": "https://example.com/your_logo",
          "handler": function (response){
              alert("Payment ID: " + response.razorpay_payment_id);
              alert("Order ID: " + response.razorpay_order_id);
              alert("Signature: " + response.razorpay_signature);
          },
          "prefill": {
              "name": "John Doe",
              "email": "john.doe@example.com",
              "contact": "9999999999"
          },
          "notes": {
              "address": "Razorpay Corporate Office"
          },
          "theme": {
              "color": "#3399cc"
          }
      };

      var rzp1 = new Razorpay(options);

      rzp1.on('payment.failed', function (response){
          alert("Payment Failed");
          console.error("Error code: " + response.error.code);
          console.error("Description: " + response.error.description);
          console.error("Source: " + response.error.source);
          console.error("Step: " + response.error.step);
          console.error("Reason: " + response.error.reason);
          console.error("Order ID: " + response.error.metadata.order_id);
          console.error("Payment ID: " + response.error.metadata.payment_id);
      });

      try {
          rzp1.open();
      } catch (error) {
          console.error("Error in opening Razorpay checkout: ", error);
          alert("Error in opening Razorpay checkout: " + error.message);
      }

    
  }
  

  ngOnInit(): void {
  }


  
  
}
