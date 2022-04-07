import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NewEnquiry } from 'app/module/enquirymodule/model/new-enquiry';
import { Observable } from 'rxjs';
import { CibilForm } from '../model/cibil-form';

@Injectable({
  providedIn: 'root'
})
export class EnqServiceService {
  constructor(private httpC:HttpClient) { }
  url1:string='http://localhost:9697';
  url2:string='http://localhost:9697/getEnquiryById'

enquiry:NewEnquiry={
  customerId:0,
  cname:'',
  mobileNo:'',
  emailid:'',
  adharNo:'',
  panNo:'',
  customerdob:'',
  occupationId:{
    occId:0,
    occType:'',
    occDiscription:''
  },

  localAddress:{
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
  permanentAddress:{
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
  customerYearlyIncome:'',
  cibilStatus:'',
}


  getAllEnquiry():Observable<NewEnquiry[]>
  {
    return this.httpC.get<NewEnquiry[]>(this.url1+"/getAllEnquiry");
  }

  getOneEnquiry(id:number):Observable<NewEnquiry>
  {
    return this.httpC.get<NewEnquiry>(this.url2+"/"+id);
  }


  url11:string='http://localhost:9698/savecibilform';
  url12:string='http://localhost:9698/getALlCibil'
  url13:string='http://localhost:9698/generateCibilScore'
 url14:string='http://localhost:9698/send'

  saveCibil(c:CibilForm)
  {
    c.customerId=this.enquiry;
    return this.httpC.post(this.url11,c);
  }

  getAllCibil():Observable<CibilForm[]>
  {
    return this.httpC.get<CibilForm[]>(this.url12)
  }

  generateCibil()
  {
    return this.httpC.get(this.url13);
  }

  sendMail(id:number)
  {
return this.httpC.get(this.url14+"/"+id)
  }
}
