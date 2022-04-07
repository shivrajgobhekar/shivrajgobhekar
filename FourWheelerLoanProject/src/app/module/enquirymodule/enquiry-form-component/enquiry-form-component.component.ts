import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EnquiryserviceService } from '../shared/enquiryservice.service';

@Component({
  selector: 'app-enquiry-form-component',
  templateUrl: './enquiry-form-component.component.html',
  styleUrls: ['./enquiry-form-component.component.css']
})
export class EnquiryFormComponentComponent implements OnInit {
NewEnquiryForm:FormGroup;
  constructor(private fb:FormBuilder,private enqService:EnquiryserviceService) { }

  ngOnInit(): void {

    this.NewEnquiryForm=this.fb.group({
      customerId:[''],
      cname:['',Validators.required],
      mobileNo:['',Validators.required],
      emailid:['',Validators.required],
      adharNo:['',Validators.required],
      panNo:['',Validators.required],
      customerdob:['',Validators.required],
      occupationId:this.fb.group({
        occId:[''],
        occType:[''],
        occDiscription:['']
      }),

      localAddress:this.fb.group({
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
      permanentAddress:this.fb.group({
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
      customerYearlyIncome:['',Validators.required],
      cibilStatus:['',Validators.required],
    })

  }

  sameData(a:any)
  {
    console.log(this.NewEnquiryForm.controls.localAddress);
    if(a.currentTarget.checked)
    {
    this.NewEnquiryForm.patchValue({
      permanentAddress:
{areaname:this.NewEnquiryForm.controls.localAddress.value.areaname,
  cityname:this.NewEnquiryForm.controls.localAddress.value.cityname,
pincode:this.NewEnquiryForm.controls.localAddress.value.pincode},
    })
    this.NewEnquiryForm.get('permanentAddress.district.districtname')?.setValue(this.NewEnquiryForm.controls.localAddress.value.district.districtname);
    this.NewEnquiryForm.get('permanentAddress.district.state.statename')?.setValue(this.NewEnquiryForm.controls.localAddress.value.district.state.statename);
  }
  
  else
  {
    this.NewEnquiryForm.patchValue({
      permanentAddress:{cityname:'',
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
    return this.enqService.saveEnquiry(this.NewEnquiryForm.value).subscribe();
  }
}
