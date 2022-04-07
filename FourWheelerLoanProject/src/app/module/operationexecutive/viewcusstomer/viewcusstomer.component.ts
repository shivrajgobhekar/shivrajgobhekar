import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CibilForm } from '../model/cibil-form';
import { EnqServiceService } from '../shared/enq-service.service';

@Component({
  selector: 'app-viewcusstomer',
  templateUrl: './viewcusstomer.component.html',
  styleUrls: ['./viewcusstomer.component.css']
})
export class ViewcusstomerComponent implements OnInit {
cibilData:CibilForm[];
  constructor(private enqService:EnqServiceService,private location:Location) { }
  p:number=1;
  count:number=3;
  ngOnInit(): void {
    this.enqService.getAllCibil().subscribe((data:CibilForm[])=>{
      this.cibilData=data;
     }
     );
  }

  goback()
  {
this.location.back();
  }

  sendMail(id:number)
  {
    this.enqService.sendMail(id).subscribe();
  }
}
