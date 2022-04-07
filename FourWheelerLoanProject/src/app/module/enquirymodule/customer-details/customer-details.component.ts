import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NewEnquiry } from '../model/new-enquiry';
import { EnquiryserviceService } from '../shared/enquiryservice.service';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent implements OnInit {
customer:NewEnquiry;
  constructor(private route:ActivatedRoute,private customerService:EnquiryserviceService,private location:Location) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(param=>
      {
     this.customerService.getOneEnquiry(parseInt(param.get('id')!)).subscribe(cust=>
      {
      this.customer=cust;
      })
      })
    
  }

  getBack()
  {
    this.location.back();
  }

}
