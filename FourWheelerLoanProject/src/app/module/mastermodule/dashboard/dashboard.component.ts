import { Component, OnInit } from '@angular/core';
import { DealerDetails } from '../model/dealer-details';
import { EmployeeDetails } from '../model/employee-details';
import { DealerServiceService } from '../shared/dealer-service.service';
import { EmployeeServiceService } from '../shared/employee-service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
emplist:EmployeeDetails[];
dealerlist:DealerDetails[];
  constructor(private empservice:EmployeeServiceService,private s:DealerServiceService) { }
  p:number=1;
  count:number=2;

  p1:number=1;
  count1:number=2;
  
  ngOnInit(): void 
  {
    this.empservice.getEmployee().subscribe((data:EmployeeDetails[])=>
    {
    this.emplist=data;
    }
    )

    this.s.getDealer().subscribe(data=>
      {
       this.dealerlist=data;
      }
      )
  }

}
