import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';

import { EnquiryFormComponentComponent } from './enquiry-form-component/enquiry-form-component.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { NgxPaginationModule } from 'ngx-pagination';

const adminrout: Routes = [
  {path: 'dashboard', component: DashboardComponent,children:[{path:'customerDetails/:id',component:CustomerDetailsComponent}]},
  {path: 'newEnquiry', component: EnquiryFormComponentComponent}
];

@NgModule({
  declarations: [DashboardComponent, EnquiryFormComponentComponent, CustomerDetailsComponent],
  imports: [
    CommonModule,RouterModule.forChild(adminrout),ReactiveFormsModule,NgxPaginationModule
  ]
})
export class EnquirymoduleModule { }
