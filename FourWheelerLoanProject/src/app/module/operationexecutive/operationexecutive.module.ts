import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule, Routes } from '@angular/router';

import { ViewcusstomerComponent } from './viewcusstomer/viewcusstomer.component';
import { CibilscoreComponent } from './cibilscore/cibilscore.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { ViewequiryComponent } from './viewequiry/viewequiry.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';


const oerouting: Routes = [
  {path: 'oedash', component: DashboardComponent,children:[{path:'ABCDE/:customerId',component:ViewequiryComponent}]},
  {path:'oecustomer',component:ViewcusstomerComponent},
  {path:'cibil',component:CibilscoreComponent}
  
];
@NgModule({
  declarations: [DashboardComponent, ViewequiryComponent, ViewcusstomerComponent, CibilscoreComponent],
  imports: [
    CommonModule,RouterModule.forChild(oerouting),NgxPaginationModule,FormsModule,ReactiveFormsModule
  ]
})
export class OperationexecutiveModule { }
