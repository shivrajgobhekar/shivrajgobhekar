import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Status } from '../model/status';

@Injectable({
  providedIn: 'root'
})
export class StatusServiceService {
  bseurl="http://localhost:9696/saveStatus";
  url="http://localhost:9696/getAllStatus";
  constructor(private http:HttpClient) { }

  sts:Status={
    statusId:0,
    statusName:"",
    statusDiscription:""
  }

  

  saveData(st:Status):Observable<Status>{
     alert("in service");
     console.log(st);
    return this.http.post<Status>(this.bseurl,st)
  }
  getData():Observable<Status[]>
  {
    return this.http.get<Status[]>(this.url)
  }
}
