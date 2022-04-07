import { CityServiceService } from './module/shared/city-service.service';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ToastrModule } from "ngx-toastr";

import { SidebarModule } from './sidebar/sidebar.module';
import { FooterModule } from './shared/footer/footer.module';
import { NavbarModule} from './shared/navbar/navbar.module';
import { FixedPluginModule} from './shared/fixedplugin/fixedplugin.module';

import { AppComponent } from './app.component';
import { AppRoutes } from './app.routing';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { EnquirymoduleModule } from './module/enquirymodule/enquirymodule.module';
import { NgxPaginationModule } from 'ngx-pagination';


@NgModule({
  declarations: [
    AppComponent,
    AdminLayoutComponent,LoginComponent, HomeComponent
  ],
  imports: [
    BrowserAnimationsModule,HttpClientModule,NgxPaginationModule
    ,RouterModule.forRoot(AppRoutes,{
      useHash: true,
    }),
    SidebarModule,
    NavbarModule,
    ToastrModule.forRoot(),
    FooterModule,FormsModule,
    FixedPluginModule,EnquirymoduleModule,ReactiveFormsModule
  ],
  providers: [CityServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
