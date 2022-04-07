import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Role } from '../model/role';
import { RoleserviceService } from '../shared/roleservice.service';

@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.css']
})
export class RoleComponent implements OnInit {
  roleForm!:FormGroup;

  rolelist!:Role[];
  constructor(private fb:FormBuilder,private common:RoleserviceService) { }

  ngOnInit(): void {
    this.common.getroleList().subscribe(list=>
      {
    this.rolelist=list;
      })

    this.roleForm=this.fb.group(
      {
        rollid:[],
        rollName:['',Validators.required],
        rolldiscription:['',Validators.required],
        status:['',Validators.required],
        

      }
    )
  }

  onSubmit()
  {
    
this.common.roleSave(this.roleForm.value).subscribe();
  }
  


}
