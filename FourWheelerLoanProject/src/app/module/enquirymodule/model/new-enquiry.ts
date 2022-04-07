import { Address } from "app/module/mastermodule/model/address";
import { OccupationDetails } from "app/module/mastermodule/model/occupation-details";

export class NewEnquiry 
{
    customerId:number;
    cname:string;
    mobileNo:string;
    emailid:string;
    adharNo:string;
    panNo:string;
    customerdob:string;
    localAddress:Address;
    permanentAddress:Address;
    occupationId:OccupationDetails;
    customerYearlyIncome:any;
    cibilStatus:string;
}
