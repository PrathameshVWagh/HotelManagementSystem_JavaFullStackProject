import { Component } from '@angular/core';
import { Customer } from '../customer';
import { Booking } from '../booking';
import { Payment } from '../payment';
import { BookingService } from '../Service/booking.service';
import { PaymentServiceService } from '../Service/payment-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerService } from '../Service/customer.service';

@Component({
  selector: 'app-customer-side-payment',
  templateUrl: './customer-side-payment.component.html',
  styleUrls: ['./customer-side-payment.component.css']
})
export class CustomerSidePaymentComponent {

  
  id:any;
  
  result:number;
  total:any;
  customer:Customer = new Customer(0,"","","","","","");
  booking :Booking = new Booking(0,0,0,'',0,0);
  payment:Payment=new Payment(0,0,0,0,0,"","");
  constructor(private bookingService:BookingService,private paymentService:PaymentServiceService,private route:ActivatedRoute,private router:Router,private customerService:CustomerService){}
 
  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.total = this.route.snapshot.paramMap.get('total');
    this.customerService.getCustomerById(this.id).subscribe(data=>{this.customer=data;},error=>console.log(error));
    this.payment.totalAmount=this.total;
   console.log(this.id);
   console.log(this.total); 
   }

   Book(){
    
    this.result=this.booking.totalAmount;
   

    }

    

  onSubmit(){
    
    console.log(this.customer);
    this.payment.status="Completed";
    this.payment.customerId=this.id;
    
    this.paymentService.payment( this.payment ).subscribe(data =>
      console.log(data));
      this.router.navigateByUrl("customerdashboard/customerallbookings");




    }
    goToDashboard(){
      this.router.navigateByUrl("/dashboard");    
    }

    onlyNumbers(event: {
      keyCode: any; which: any; 
}):boolean{
      const charCode = (event.which)?event.which:event.keyCode;
      if(charCode>31 && (charCode<48 || charCode>57))
      {
        console.log("chacode restricted : "+charCode);
        return false;
      }
      return true;

    }



}
