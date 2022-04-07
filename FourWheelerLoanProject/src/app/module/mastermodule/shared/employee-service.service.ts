import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EmployeeDetails } from '../model/employee-details';

@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService 
{

  constructor(private httpClient:HttpClient) { }
  url1:string='http://localhost:9696';
  url2:string='http://localhost:9696/getEmployeeById'
e:EmployeeDetails={
  eid:0,
  ename:'',
  empUsername:'',
  empPassword:'',
  mobNo :'',
  emailid:'',
  role:'',
  localaddress:{
    aid:0,
    areaname:'',
    cityname:'',
    pincode:'',
    district:{
      districtid:0,
      districtname:'',

      state:{
        stateid:0,
        statename:'',
      }
    }
  },
  permanentaddress:{
    aid:0,
    areaname:'',
    cityname:'',
    pincode:'',
    district:{
      districtid:0,
      districtname:'',

      state:{
        stateid:0,
        statename:'',
      }
    }
  },
  bankDetails:{
    bankId:0,
    bankName:'',
    accountno:'',
    accounttype:'',
    ifscCode:'',
    micrCode:'',
    branchId:[{
      branchId:0,
      branchName:'',
      branchAddr:'',
      branchCode:''
    }]
  }
}
  saveEmployee(e:EmployeeDetails)
  {
    return this.httpClient.post(this.url1+"/saveEmployee",e);
  }

  getEmployee():Observable<EmployeeDetails[]>
  {
    return this.httpClient.get<EmployeeDetails[]>(this.url1+"/getAllEmployee")
  }

  getOneEmployee(a:number):Observable<EmployeeDetails>
  {
    return this.httpClient.get<EmployeeDetails>(this.url2+"/"+a)
  }

}
