import { Component } from '@angular/core';
import { Customer } from '../customer';
import { Booking } from '../booking';
import { BookingService } from '../Service/booking.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerService } from '../Service/customer.service';

@Component({
  selector: 'app-customersidebooking',
  templateUrl: './customersidebooking.component.html',
  styleUrls: ['./customersidebooking.component.css']
})
export class CustomersidebookingComponent {


  id:number;
  result:number;
  customer:Customer = new Customer(0,"","","","","","");
  booking :Booking = new Booking(0,0,0,'',0);
  
  constructor(private bookingService:BookingService,private route:ActivatedRoute,private router:Router,private customerService:CustomerService){}
 
  ngOnInit(): void {
    this.id= this.route.snapshot.params['id'];
    this.customerService.getCustomerById(this.id).subscribe(data=>{this.customer=data;},error=>console.log(error));
   }

   Calculate(v:string,b:string){
    this.result=parseInt(v)*parseInt(b);
    

   }
   
  Book(){
    console.log(this.result);
    console.log(this.customer.employeeId);
    this.booking.totalAmount=this.result;
    console.log(this.booking);
    this.bookingService.bookRoom(this.booking).subscribe(data=>
      this.router.navigateByUrl("customerdashboard/customerallbookings"));

    }
    


}
