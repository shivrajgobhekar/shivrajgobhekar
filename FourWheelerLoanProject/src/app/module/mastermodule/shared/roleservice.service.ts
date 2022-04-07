import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Role } from '../model/role';

@Injectable({
  providedIn: 'root'
})
export class RoleserviceService {

  url:string='http://localhost:9696/saveRole';
  url1:string=' http://localhost:9696/getAllRole' ;  

  constructor(private httpclient:HttpClient) { }

  roleSave(r:Role):Observable<Role>
  {
    return this.httpclient.post<Role>(this.url,r);
  }
  
 getroleList():Observable<Role[]>
{
  return this.httpclient.get<Role[]>(this.url1);
}

}
