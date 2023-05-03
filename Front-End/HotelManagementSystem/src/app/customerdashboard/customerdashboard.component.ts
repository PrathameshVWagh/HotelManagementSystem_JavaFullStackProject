import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from '../customer';

@Component({
  selector: 'app-customerdashboard',
  templateUrl: './customerdashboard.component.html',
  styleUrls: ['./customerdashboard.component.css']
})
export class CustomerdashboardComponent {
  constructor(public activateroute:ActivatedRoute,private route:Router) { }
  user2:Customer
  ngOnInit(): void 
  {
   
  }


  logout() {
    if (sessionStorage.getItem("user2")) {
      sessionStorage.clear()
      localStorage.clear()
      alert("Logout Successfully")
      this.route.navigateByUrl("")
    }
    else {
      alert("No user loged in")
    }
  }
}
