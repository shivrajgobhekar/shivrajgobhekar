import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EnqServiceService } from '../shared/enq-service.service';

@Component({
  selector: 'app-cibilscore',
  templateUrl: './cibilscore.component.html',
  styleUrls: ['./cibilscore.component.css']
})
export class CibilscoreComponent implements OnInit {
  cibilForm:FormGroup;
  cibilScore:any;
  checkCibilScore:boolean=false;
  constructor(private fb:FormBuilder,private enqService:EnqServiceService,private location:Location) { }

  ngOnInit(): void {
  
  this.cibilForm=this.fb.group({
    cibilId:[''],
    uidStatus:[''],
    panStatus:[''],
    cibilStatus:[''],
    cibilScore:[''],
    cibilGeneratedDate:[''],
    cibilGeneratedBy:[''],

    customerId:this.fb.group({customerId:[''],
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
})
  }

saveCibil()
{
  this.enqService.saveCibil(this.cibilForm.value).subscribe();
}

generateCibil()
{
  this.checkCibilScore=true;
  this.enqService.generateCibil().subscribe(data=>
    {
      this.cibilScore=data;
      console.log(data);
    })
}

getBackground()
  {
    if(this.cibilScore>750)
    {
      return {color:'green'}
    }
    else
    {
      return {color:'red'}
    }
   
  }

  msgCibil(){
    console.log("in msg");
        if(this.cibilScore>750){
            
          return "Cibil Score is Good....):";
        }
        else{
          
          return "Cibil Score is Bad ......;(";
        }
      }
  getback()
  {
this.location.back();
  }
  
  onSubmit()
{
  this.enqService.saveCibil(this.cibilForm.value).subscribe();
}
 
}
