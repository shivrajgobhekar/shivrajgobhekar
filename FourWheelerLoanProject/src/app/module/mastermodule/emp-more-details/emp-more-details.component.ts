import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeeDetails } from '../model/employee-details';
import { EmployeeServiceService } from '../shared/employee-service.service';

@Component({
  selector: 'app-emp-more-details',
  templateUrl: './emp-more-details.component.html',
  styleUrls: ['./emp-more-details.component.css']
})
export class EmpMoreDetailsComponent implements OnInit {
emp1:EmployeeDetails;
d1;
  constructor(private route:ActivatedRoute,private empservice:EmployeeServiceService,private location:Location) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(param=>
      {
        this.empservice.getOneEmployee(parseInt( param.get('id')!)).subscribe(emp=>
          {
            this.emp1=emp
          })
      }
      )

      
  }

  getBack(){
    this.location.back();
      }

}
