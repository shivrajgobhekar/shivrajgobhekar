import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DealerDetails } from '../model/dealer-details';
import { DealerServiceService } from '../shared/dealer-service.service';

@Component({
  selector: 'app-dealer-details',
  templateUrl: './dealer-details.component.html',
  styleUrls: ['./dealer-details.component.css']
})
export class DealerDetailsComponent implements OnInit {
d:DealerDetails;
  constructor(private route:ActivatedRoute,private dealerService:DealerServiceService,private location:Location) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(param=>
      {
        this.dealerService.getOneDealer(parseInt( param.get('id')!)).subscribe(d1=>
          {
            this.d=d1
          })
      }
      )
  }
  getBack(){
    this.location.back();
      }

}
