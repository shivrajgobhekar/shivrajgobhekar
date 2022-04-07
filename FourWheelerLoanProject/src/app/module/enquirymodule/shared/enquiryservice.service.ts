import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { NewEnquiry } from '../model/new-enquiry';

@Injectable({
  providedIn: 'root'
})
export class EnquiryserviceService {

  constructor(private httpClient:HttpClient) { }

  url1:string='http://localhost:9697';
  url2:string='http://localhost:9697/getEnquiryById'

  saveEnquiry(e:NewEnquiry)
  {
    return this.httpClient.post(this.url1+"/saveEnquiry",e);
  }

  getAllEnquiry():Observable<NewEnquiry[]>
  {
    return this.httpClient.get<NewEnquiry[]>(this.url1+"/getAllEnquiry");
  }

  getOneEnquiry(id:number):Observable<NewEnquiry>
  {
    return this.httpClient.get<NewEnquiry>(this.url2+"/"+id);
  }
}
