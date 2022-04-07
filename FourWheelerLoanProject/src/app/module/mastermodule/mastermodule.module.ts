import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddemployeeComponent } from './addemployee/addemployee.component';
import { StatusComponent } from './status/status.component';
import { DealercomponentComponent } from './dealercomponent/dealercomponent.component';
import { RoleComponent } from './role/role.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { EmpMoreDetailsComponent } from './emp-more-details/emp-more-details.component';
import { DealerDetailsComponent } from './dealer-details/dealer-details.component';



const adminrouting: Routes = [
  {path: 'adminbash', component: DashboardComponent,
  children:[
    {path:'moreDetails/:id',component:EmpMoreDetailsComponent},
    {path:'dealerDetails/:id',component:DealerDetailsComponent}
 ]

},
  {path: 'addemployee', component: AddemployeeComponent},
  {path:"status",component:StatusComponent},
  {path:'dealer', component:DealercomponentComponent},
  {path:'role',component:RoleComponent},
  
];

@NgModule({
  declarations: [DashboardComponent, AddemployeeComponent, StatusComponent, DealercomponentComponent, RoleComponent, EmpMoreDetailsComponent, DealerDetailsComponent],
  imports: [
    CommonModule, RouterModule.forChild(adminrouting),FormsModule,NgxPaginationModule,ReactiveFormsModule
  ]
})
export class MastermoduleModule { 

}
