import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DealerDetails } from '../model/dealer-details';

@Injectable({
  providedIn: 'root'
})
export class DealerServiceService {
  url:string="http://localhost:9696/saveDealer";
  url1:string="http://localhost:9696/getAllDealer";
  url2:string="http://localhost:9696/getOneDealer";
  constructor(private http: HttpClient) { }

  d:DealerDetails={
    did:0,
    dname:"",
    dDob:"",
    demailId:"",
    dMobileno:"",
    dAdharNo:"",
    dLocalAddress:{
                aid:0,
                areaname:"",
                cityname:"",
                pincode:"",
                district:{
                          districtid:0,
                          districtname:"",
                          state:{
                                  stateid:0,
                                  statename:""
                                 }
                         }
                  },
    dPermanentAddress:{
                      aid:0,
                      areaname:"",
                      cityname:"",
                      pincode:"",
                      district:{
                                districtid:0,
                                districtname:"",
                                state:{
                                        stateid:0,
                                        statename:""
                                      }
                                }
                      },  
    dBankDetails: {
                                  bankId:0,
                                  accountno:"",
                                  accounttype:"",
                                  bankName:"",
                                  ifscCode:"",
                                  micrCode:"",
                                  branchId:[{
                                    branchId:0,
                                    branchName:"",
                                    branchAddr:"",
                                    branchCode:""
                                           }]
                   }                          
   }
  
    saveDealer(dl:DealerDetails)
    {
      alert("in service");
      return this.http.post(this.url,dl);
    }
    getDealer():Observable<DealerDetails[]>
    {
      return this.http.get<DealerDetails[]>(this.url1);
    }
    getOneDealer(id:number):Observable<DealerDetails>
    {
      return this.http.get<DealerDetails>(this.url2+"/"+id);
    }
}
