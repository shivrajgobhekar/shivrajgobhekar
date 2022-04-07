import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DealerDetails } from '../model/dealer-details';
import { DealerServiceService } from '../shared/dealer-service.service';

@Component({
  selector: 'app-dealercomponent',
  templateUrl: './dealercomponent.component.html',
  styleUrls: ['./dealercomponent.component.css']
})
export class DealercomponentComponent implements OnInit {
  dealerRegForm:FormGroup;
  dealerlist:DealerDetails[];
  constructor(private s:DealerServiceService,private fb:FormBuilder) { }

  ngOnInit(): void {

    this.dealerRegForm=this.fb.group({
      did:[""],
      dname:["",[Validators.required]],
      dDob:["",[Validators.required]],
      demailId:["",[Validators.required]],
      dMobileno:["",[Validators.required]],
      dAdharNo:["",[Validators.required]],
      dLocalAddress:this.fb.group({
        aid:[""],
        areaname:["",[Validators.required]],
         cityname:["",[Validators.required]],
          pincode:["",[Validators.required]],
                  district:this.fb.group({
                      districtid:[""],
                       districtname:["",[Validators.required]],
                            state:this.fb.group({
                                 stateid:[""],
                                   statename:["",[Validators.required]]
                                                 })
  
                                            })
                                          }),
      dPermanentAddress:this.fb.group({aid:[""],
      areaname:["",[Validators.required]],
      cityname:["",[Validators.required]],
      pincode:["",[Validators.required]],
      district:this.fb.group({
                             districtid:[""],
                             districtname:["",[Validators.required]],
                             state:this.fb.group({
                                                   stateid:[""],
                                                   statename:["",[Validators.required]]
                                                 })
  
                              })
                          }),
      dBankDetails:this.fb.group({ 
                                  bankId:[""],
                                  accountno:["",[Validators.required]],
                                  accounttype:["",[Validators.required]],
                                  bankName:["",[Validators.required]],
                                  ifscCode:["",[Validators.required]],
                                  micrCode:["",[Validators.required]],
                                  branchId:this.fb.array([this.fb.group({
                                        branchId:[""],
                                         branchName:["",[Validators.required]],
                                         branchAddr:["",[Validators.required]],
                                          branchCode:["",[Validators.required]]
                                                                          
                                  })
                                  ])
                                 })
      })
    }
  onSubmit()
  {
    if(this.dealerRegForm.valid)
    {
      alert("are you sure your all data is correct");
      this.s. saveDealer(this.dealerRegForm.value).subscribe();
    }

  }
  getDealerData()
  {
    this.s.getDealer().subscribe(data=>{
      this.dealerlist=data;
     }
     )
  }
  
  
  
  sameData(a:any)
    {
      console.log(this.dealerRegForm.controls.dLocalAddress);
      if(a.currentTarget.checked)
      {
      this.dealerRegForm.patchValue({
        dPermanentAddress:
  {areaname:this.dealerRegForm.controls.dLocalAddress.value.areaname,
    cityname:this.dealerRegForm.controls.dLocalAddress.value.cityname,
  pincode:this.dealerRegForm.controls.dLocalAddress.value.pincode},
      })
      this.dealerRegForm.get('dPermanentAddress.district.districtname')?.setValue(this.dealerRegForm.controls.dLocalAddress.value.district.districtname);
      this.dealerRegForm.get('dPermanentAddress.district.state.statename')?.setValue(this.dealerRegForm.controls.dLocalAddress.value.district.state.statename);
    }
    
    else
    {
      this.dealerRegForm.patchValue({
        dPermanentAddress:{cityname:'',
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
}
