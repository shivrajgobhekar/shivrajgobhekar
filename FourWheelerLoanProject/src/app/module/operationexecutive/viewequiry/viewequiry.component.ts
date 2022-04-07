import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NewEnquiry } from 'app/module/enquirymodule/model/new-enquiry';
import { EnqServiceService } from '../shared/enq-service.service';



@Component({
  selector: 'app-viewequiry',
  templateUrl: './viewequiry.component.html',
  styleUrls: ['./viewequiry.component.css']
})
export class ViewequiryComponent implements OnInit {
customer:NewEnquiry;
  constructor(private route:ActivatedRoute,private cService:EnqServiceService,private location:Location) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(param=>
      {
     this.cService.getOneEnquiry(parseInt(param.get('customerId')!)).subscribe(cust=>
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
