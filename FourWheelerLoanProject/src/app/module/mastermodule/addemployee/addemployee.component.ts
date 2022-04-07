import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmployeeServiceService } from '../shared/employee-service.service';

@Component({
  selector: 'app-addemployee',
  templateUrl: './addemployee.component.html',
  styleUrls: ['./addemployee.component.css']
})
export class AddemployeeComponent implements OnInit {
employeeDetailsForm:FormGroup;
  constructor(private fb:FormBuilder,private empservice:EmployeeServiceService) { }

  ngOnInit(): void 
  {
    this.employeeDetailsForm=this.fb.group({
      eid:[''],
      ename:['',Validators.required],
      empUsername:['',Validators.required],
      empPassword:['',Validators.required],
      mobNo:['',Validators.required],
      emailid:['',Validators.required],
      role:['',Validators.required],
      localaddress:this.fb.group({
        aid:[''],
        areaname:['',Validators.required],
        cityname:['',Validators.required],
        pincode:['',Validators.required],
        district:this.fb.group({
          districtid:[''],
          districtname:['',Validators.required],

          state:this.fb.group({
            stateid:[''],
            statename:['',Validators.required],
          })
        })
      }),
      permanentaddress:this.fb.group({
        aid:[''],
        areaname:['',Validators.required],
        cityname:['',Validators.required],
        pincode:['',Validators.required],
        district:this.fb.group({
          districtid:[''],
          districtname:['',Validators.required],

          state:this.fb.group({
            stateid:[''],
            statename:['',Validators.required],
          })
        })
      }),
      bankDetails:this.fb.group({
        bankId:[''],
        bankName:['',Validators.required],
        accountno:['',Validators.required],
        accounttype:['',Validators.required],
        ifscCode:['',Validators.required],
        micrCode:['',Validators.required],
        branchId:this.fb.array([this.fb.group({
          branchId:[''],
          branchName:['',Validators.required],
          branchAddr:['',Validators.required],
          branchCode:['',Validators.required]
        })])
      })
      
    })

  }

  sameData(a:any)
  {
    console.log(this.employeeDetailsForm.controls.localaddress);
    if(a.currentTarget.checked)
    {
    this.employeeDetailsForm.patchValue({
      permanentaddress:
{areaname:this.employeeDetailsForm.controls.localaddress.value.areaname,
  cityname:this.employeeDetailsForm.controls.localaddress.value.cityname,
pincode:this.employeeDetailsForm.controls.localaddress.value.pincode},
    })
    this.employeeDetailsForm.get('permanentaddress.district.districtname')?.setValue(this.employeeDetailsForm.controls.localaddress.value.district.districtname);
    this.employeeDetailsForm.get('permanentaddress.district.state.statename')?.setValue(this.employeeDetailsForm.controls.localaddress.value.district.state.statename);
  }
  
  else
  {
    this.employeeDetailsForm.patchValue({
      permanentaddress:{cityname:'',
      areaname:'',
      pincode:'',
    district:{
      districtname:'',

          state:{
              statename:''
               }
            }
                        }
                                        })
  }

  }

  submitData()
  {
    alert("in submit function");
    return this.empservice.saveEmployee(this.employeeDetailsForm.value).subscribe();
  }
}
