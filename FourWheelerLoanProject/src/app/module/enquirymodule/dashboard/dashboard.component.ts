import { Component, OnInit } from '@angular/core';
import { NewEnquiry } from '../model/new-enquiry';
import { EnquiryserviceService } from '../shared/enquiryservice.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
enqCust:NewEnquiry[];
p:number=1;
  count:number=5;
  constructor(private enquiryService:EnquiryserviceService) { }

  ngOnInit(): void {
    this.enquiryService.getAllEnquiry().subscribe((data:NewEnquiry[])=>{
      this.enqCust=data;
     }
     );
  }

}
