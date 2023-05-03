import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer';
import { CustomerService } from '../Service/customer.service';
import { ActivatedRoute,  Router } from '@angular/router';

@Component({
  selector: 'app-update-customer',
  templateUrl: './update-customer.component.html',
  styleUrls: ['./update-customer.component.css']
})
export class UpdateCustomerComponent implements OnInit{
  id:number;
  customer:Customer = new Customer(0,"","","","","","");
  constructor(private customerService:CustomerService,private route:ActivatedRoute,private router:Router){}
  ngOnInit(): void {
    this.id= this.route.snapshot.params['id'];
    this.customerService.getCustomerById(this.id).subscribe(data=>{this.customer=data;},error=>console.log(error));
  }

 

    onSubmit(){
      console.log(this.customer);
      this.customerService.updateCustomer(this.customer).subscribe(data=>
        this.router.navigateByUrl("/dashboard/customers"));

      }

}
