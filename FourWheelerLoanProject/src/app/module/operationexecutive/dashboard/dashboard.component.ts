import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NewEnquiry } from 'app/module/enquirymodule/model/new-enquiry';
import { EnqServiceService } from '../shared/enq-service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  enqCust:NewEnquiry[];
  p:number=1;
  count:number=5;
  constructor(private enquiryService:EnqServiceService,private router:Router) { }

  ngOnInit(): void {
    this.enquiryService.getAllEnquiry().subscribe((data:NewEnquiry[])=>{
      this.enqCust=data;
     }
     );
  }
  goToGenCibil(enq:NewEnquiry)
  {
    alert("in cibil function");
    this.enquiryService.enquiry=Object.assign({},enq);
    sessionStorage.setItem('role', 'operation');
    this.router.navigateByUrl("role/operation/cibil");
 }

}
