import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Status } from '../model/status';
import { StatusServiceService } from '../shared/status-service.service';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent implements OnInit {
  statusForm!:FormGroup;
  statuslist!:Status[];
  constructor(private fb:FormBuilder,private service:StatusServiceService) { }

  ngOnInit(): void {
    this.statusForm=this.fb.group({
      statusId:[],
      statusName:[''],
      statusDiscription:['']
      
  })
  this.service.getData().subscribe((data:Status[])=>
  {
    this.statuslist=data;
  }
  )

  }

  onSubmit()
  {
     alert ("in if condition");
    this.service.saveData(this.statusForm.value).subscribe();
  
  }

}
